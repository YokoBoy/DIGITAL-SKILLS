function renderUserContent(user) {
    const container = document.getElementById('user-content-area');
    if (!container || !user || !user.level) return;

    const lang = localStorage.getItem('selectedLanguage') || 'ru';

    if (typeof translations === 'undefined' || !translations.levels || !translations.levels[lang]) {
        console.error("Translations not ready or missing level data");
        return;
    }

    const levelData = translations.levels[lang][user.level];
    if (!levelData) return;

    // Calculate progress
    const progressKey = `${lang}_${user.level}`;
    let userProgress = user.progress && user.progress[progressKey] ? user.progress[progressKey] : {};

    // Fallback: If no lang-specific progress, check generic key (legacy support for RU default)
    if (Object.keys(userProgress).length === 0 && lang === 'ru') {
        if (user.progress && user.progress[user.level]) {
            userProgress = user.progress[user.level];
        }
    }
    let completedCount = 0;
    let sumPercent = 0;
    let sumGrade = 0;

    // Header
    let html = `
        <div class="level-header mb-4">
            <h3 class="text-white">${levelData.title}</h3>
            <p class="text-white-50">${levelData.description}</p>
        </div>
        <div class="row">
    `;

    for (let i = 1; i <= levelData.tasks; i++) {
        let taskTitle = (lang === 'ru' ? 'Задание' : 'Topshiriq') + ' ' + i;
        let taskDesc = (lang === 'ru' ? 'Описание задания...' : 'Topshiriq tavsifi...');

        if (user.level === 'advanced' && i === 4 && levelData.specialTask) {
            taskDesc = levelData.specialTask;
        }

        // Check progress
        const score = userProgress[i];
        let badgeHtml = '';
        let cardClass = 'bg-dark text-white border-secondary';
        let btnText = lang === 'ru' ? 'Открыть' : 'Ochish';
        let btnClass = 'btn-primary';
        let isLocked = false;


        // Define threshold logic for THIS level
        let threshold = 60;
        if (user.level === 'intermediate') threshold = 70;
        if (user.level === 'advanced') threshold = 90;

        // SEQUENTIAL LOCKING LOGIC
        if (i > 1) {
            const prevScore = userProgress[i - 1] !== undefined ? userProgress[i - 1] : 0;
            if (prevScore < threshold) {
                isLocked = true;
                btnText = lang === 'ru' ? 'Заблокировано' : 'Yopiq';
                btnClass = 'btn-secondary disabled';
                cardClass = 'bg-secondary bg-opacity-10 text-white-50 border-secondary';
            }
        }

        if (score !== undefined) {
            sumPercent += score;

            let grade = 2;
            let badgeColor = 'danger'; // Default red/fail

            // Should grade definition change? 
            // User: "Intermediate pass with 4 and above".
            // If I get 65 (Grade 3), is it a fail? Yes.
            // So visually it should perhaps look like a fail for Intermediate context?
            // But let's keep standard gradients: 
            // 91-100 (5), 71-90 (4), 60-70 (3), <60 (2).
            // We just enforce the *threshold* for "Completed".

            if (score >= 91) {
                grade = 5;
                badgeColor = 'success';
                cardClass = 'bg-success bg-opacity-25 text-white border-success';
                btnClass = 'btn-outline-light';
            } else if (score >= 71) {
                grade = 4;
                badgeColor = 'primary'; // Blue
                cardClass = 'bg-primary bg-opacity-25 text-white border-primary';
                btnClass = 'btn-outline-light';
            } else if (score >= 60) {
                grade = 3;
                badgeColor = 'warning'; // Yellow/Orange
                cardClass = 'bg-warning bg-opacity-10 text-white border-warning';
                btnClass = 'btn-outline-light';
            } else {
                // Fail
                badgeColor = 'danger';
                cardClass = 'bg-danger bg-opacity-10 text-white border-danger';
            }

            // Visual override if score is below threshold but grade is >= 3 (e.g. Int & 60-69)
            if (score < threshold) {
                badgeColor = 'danger'; // Mark as red/bad even if technically 3
                // Keep grade number correct? Or demote? 
                // User says "Intermediate only with 4". So Grade 3 is effectively a "Not Good Enough".
                // Let's keep the grade number but use red color/danger style.
                cardClass = 'bg-danger bg-opacity-10 text-white border-danger';
            }

            sumGrade += grade;

            if (score >= threshold) {
                completedCount++;
                btnText = lang === 'ru' ? 'Повторить' : 'Qayta ishlash';
            } else {
                btnText = lang === 'ru' ? 'Пересдать' : 'Qayta topshirish';
            }

            badgeHtml = `<span class="position-absolute top-0 end-0 translate-middle badge rounded-pill bg-${badgeColor}">
                            ${score}% (${grade}) <span class="visually-hidden">score</span>
                         </span>`;
        } else {
            // Not done logic
            sumGrade += 2;
        }

        html += `
            <div class="col-md-4 mb-4">
                <div class="card h-100 ${cardClass} feature-card" style="position: relative;">
                    ${badgeHtml}
                    <div class="card-body">
                        <h5 class="card-title">${taskTitle}</h5>
                        <p class="card-text small">${taskDesc}</p>
                        <a href="${isLocked ? '#' : `task.html?id=${i}&level=${user.level}`}" class="btn ${btnClass} btn-sm mt-2 ${isLocked ? 'disabled' : ''}">${btnText}</a>
                    </div>
                </div>
            </div>
        `;
    }

    html += '</div>';

    // Statistics & Certificate
    const allCompleted = completedCount >= levelData.tasks;
    const totalTasks = levelData.tasks;
    const avgPercent = totalTasks > 0 ? Math.round(sumPercent / totalTasks) : 0;
    const avgGrade = totalTasks > 0 ? (sumGrade / totalTasks).toFixed(1) : 0;

    // Dynamic message for bottom
    const threshold = user.level === 'advanced' ? 90 : (user.level === 'intermediate' ? 70 : 60);

    html += `
        <div class="row mt-5">
            <div class="col-12 text-center">
                <div class="card bg-transparent border-0">
                    <div class="card-body">
                        <h4 class="text-white mb-3">${lang === 'ru' ? 'Ваша успеваемость' : 'Sizning natijalaringiz'}</h4>
                        
                        <div class="row justify-content-center mb-4 text-white">
                            <div class="col-md-4">
                                <div class="p-3 border rounded bg-dark bg-opacity-50">
                                    <h5>${lang === 'ru' ? 'Средний балл (%)' : 'O\'rtacha ball (%)'}</h5>
                                    <h2 class="text-info">${avgPercent}%</h2>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="p-3 border rounded bg-dark bg-opacity-50">
                                    <h5>${lang === 'ru' ? 'Средняя оценка' : 'O\'rtacha baho'}</h5>
                                    <h2 class="${avgGrade >= 4.5 ? 'text-success' : (avgGrade >= 3.5 ? 'text-primary' : (avgGrade >= 3 ? 'text-warning' : 'text-danger'))}">${avgGrade}</h2>
                                </div>
                            </div>
                        </div>
                        
                        ${allCompleted ? `
                            <div class="alert alert-success">
                                <h4 class="alert-heading"><i class="fas fa-check-circle"></i> ${lang === 'ru' ? 'Поздравляем!' : 'Tabriklaymiz!'}</h4>
                                <p>${lang === 'ru' ? 'Вы успешно выполнили все задания!' : 'Siz barcha topshiriqlarni muvaffaqiyatli bajardingiz!'}</p>
                                <hr>
                                <button class="btn btn-warning btn-lg fw-bold" onclick="generateCertificate(${avgPercent}, ${avgGrade})">${lang === 'ru' ? 'Получить сертификат' : 'Sertifikat olish'}</button>
                            </div>
                        ` : `
                            <p class="text-white-50">${lang === 'ru' ? `Выполнено: ${completedCount} из ${totalTasks}` : `Bajarildi: ${totalTasks} dan ${completedCount}`}</p>
                            ${completedCount < totalTasks ? `<p class="small text-muted">${lang === 'ru' ? `Для получения сертификата нужно выполнить все задания минимум на ${threshold}%.` : `Sertifikat olish uchun barcha topshiriqlarni kamida ${threshold}% ga bajarish kerak.`}</p>` : ''}
                        `}
                    </div>
                </div>
            </div>
        </div>
    `;

    container.innerHTML = html;
}

window.renderUserContent = renderUserContent;

// Global handler
window.openTask = function (index, level) {
    if (typeof TaskRunner !== 'undefined') {
        TaskRunner.open(index, level);
    } else {
        console.error("TaskRunner not loaded");
    }
}


window.generateCertificate = function (percent, grade) {
    const lang = localStorage.getItem('selectedLanguage') || 'ru';
    const title = lang === 'ru' ? 'Поздравляем!' : 'Tabriklaymiz!';
    const msg = lang === 'ru' ?
        'Вы успешно завершили уровень! Сертификат доступен в личном кабинете.' :
        'Siz darajani muvaffaqiyatli yakunladingiz! Sertifikat shaxsiy kabinetda mavjud.';
    const btnCabinet = lang === 'ru' ? 'В кабинет' : 'Kabinetga';
    const btnStay = lang === 'ru' ? 'Остаться' : 'Qolish';

    // Create Modal HTML
    const modalId = 'certModalDashboard';
    const existing = document.getElementById(modalId);
    if (existing) existing.remove();

    const html = `
    <div class="modal fade" id="${modalId}" tabindex="-1" aria-hidden="true" data-bs-backdrop="static" style="z-index: 10000;">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content text-dark" style="border: 2px solid #ffc107;">
          <div class="modal-header bg-warning text-dark">
            <h5 class="modal-title"><i class="fas fa-award"></i> ${title}</h5>
            <button type="button" class="btn-close" onclick="document.getElementById('${modalId}').remove()" aria-label="Close"></button>
          </div>
          <div class="modal-body text-center py-4">
             <i class="fas fa-certificate fa-4x text-primary mb-3"></i>
             <p class="lead">${msg}</p>
             <p class="text-muted small">${lang === 'ru' ? `Ваш результат: ${percent}% (Оценка ${grade})` : `Natijangiz: ${percent}% (Baho ${grade})`}</p>
          </div>
          <div class="modal-footer justify-content-center">
            <button type="button" class="btn btn-secondary" onclick="document.getElementById('${modalId}').remove()">${btnStay}</button>
            <a href="cabinet.html" class="btn btn-primary">${btnCabinet}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade show" id="${modalId}-backdrop" style="z-index: 9999;"></div>`;

    document.body.insertAdjacentHTML('beforeend', html);
    const modalEl = document.getElementById(modalId);
    const backdropEl = document.getElementById(`${modalId}-backdrop`);

    // Try Bootstrap first
    let bsSuccess = false;
    if (typeof bootstrap !== 'undefined' && bootstrap.Modal) {
        try {
            const modal = new bootstrap.Modal(modalEl);
            modal.show();
            if (backdropEl) backdropEl.remove();
            bsSuccess = true;
        } catch (e) {
            console.warn("Bootstrap Modal init failed", e);
        }
    }

    if (!bsSuccess) {
        modalEl.classList.add('show');
        modalEl.style.display = 'block';
    }
}
