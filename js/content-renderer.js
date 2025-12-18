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
    const userProgress = user.progress && user.progress[user.level] ? user.progress[user.level] : {};
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

        if (score !== undefined) {
            sumPercent += score;

            let grade = 2;
            let badgeColor = 'danger'; // Default red/fail

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

            sumGrade += grade;

            if (score >= 60) {
                completedCount++;
                btnText = lang === 'ru' ? 'Повторить' : 'Qayta ishlash';
            } else {
                btnText = lang === 'ru' ? 'Пересдать' : 'Qayta topshirish';
            }

            badgeHtml = `<span class="position-absolute top-0 end-0 translate-middle badge rounded-pill bg-${badgeColor}">
                            ${score}% (${grade}) <span class="visually-hidden">score</span>
                         </span>`;
        } else {
            // Task not touched yet
            // If we treat untouched as 0 for "Average Grade" calculation purposes? 
            // Usually average is over *attempted* or *total*? 
            // User said "add all and divide by count of tasks", implying total tasks?
            // "в оценке все добавляем и делим на кол заданий" -> Assuming divide by levelData.tasks
            // But if I haven't done it, is it a 0 or a 2? Let's assume 0 score -> Grade 2.
            sumGrade += 2; // Default fail grade? Or 0?
            // "60% is 3, <60 is 2". So 0% is 2.
            // Okay, sumGrade += 2 if not done.
        }

        html += `
            <div class="col-md-4 mb-4">
                <div class="card h-100 ${cardClass} feature-card" style="position: relative;">
                    ${badgeHtml}
                    <div class="card-body">
                        <h5 class="card-title">${taskTitle}</h5>
                        <p class="card-text small">${taskDesc}</p>
                        <a href="task.html?id=${i}&level=${user.level}" class="btn ${btnClass} btn-sm mt-2">${btnText}</a>
                    </div>
                </div>
            </div>
        `;
    }

    html += '</div>';

    // Statistics & Certificate
    const allCompleted = completedCount >= levelData.tasks; // Assuming all passed >= 60
    const totalTasks = levelData.tasks;
    const avgPercent = totalTasks > 0 ? Math.round(sumPercent / totalTasks) : 0;

    // Average Grade Calculation
    // Logic: Sum of grades / Total Tasks. 
    // If user hasn't done a task, I added 2 above. 
    // Wait, let's verify if "untouched" should count as 2.
    // Ideally "Certificate" is only available if ALL are done.
    // So distinct logic: 
    // Current Avg Display: average of *completed*? No, user said "all tasks".
    // So I will stick to (Sum of all including defaults) / Total.
    const avgGrade = totalTasks > 0 ? (sumGrade / totalTasks).toFixed(1) : 0;

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
                            <p class="text-white-50">${lang === 'ru' ? `Выполнено (на оценку 3+): ${completedCount} из ${totalTasks}` : `Bajarildi (3+ bahoga): ${totalTasks} dan ${completedCount}`}</p>
                            ${completedCount < totalTasks ? `<p class="small text-muted">${lang === 'ru' ? 'Для получения сертификата нужно выполнить все задания минимум на 60%.' : 'Sertifikat olish uchun barcha topshiriqlarni kamida 60% ga bajarish kerak.'}</p>` : ''}
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
    const user = JSON.parse(localStorage.getItem('user'));
    const lang = localStorage.getItem('selectedLanguage') || 'ru';
    const msg = lang === 'ru'
        ? `Сертификат для ${user.name}\nСредний балл: ${percent}%\nСредняя оценка: ${grade}\n(Генерация PDF в разработке)`
        : `Sertifikat ${user.name} uchun\nO'rtacha ball: ${percent}%\nO'rtacha baho: ${grade}\n(PDF generatsiya jarayonda)`;
    alert(msg);
}
