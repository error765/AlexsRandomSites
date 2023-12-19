function toggleMode() {
    const body = document.body;
    const modeToggleBtn = document.getElementById('modeToggle');

    body.classList.toggle('dark-mode');
    
    // Update the toggle button icon based on the dark mode state
    if (body.classList.contains('dark-mode')) {
        modeToggleBtn.innerHTML = '🌙'; // Display 🌙 for dark mode
    } else {
        modeToggleBtn.innerHTML = '☀️'; // Display ☀️ for light mode
    }
}
