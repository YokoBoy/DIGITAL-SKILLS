// This file is deprecated. 
// Tasks are now loaded from:
// - js/tasks/basic-data.js
// - js/tasks/intermediate-data.js
// - js/tasks/advanced-data.js
// - js/tasks/task-runner.js

console.warn('WARNING: js/tasks.js is deprecated but was loaded. Please update your HTML to remove this script reference.');

// Prevent errors if this file is loaded
window.basicTasks = window.basicTasks || [];
window.intermediateTasks = []; // Explicitly empty to prevent usage
