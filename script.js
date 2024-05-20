document.addEventListener('DOMContentLoaded', () => {
    const chapterContainer = document.getElementById('chapter-container');

    // Load the state of each chapter box from local storage
    const chapterStates = JSON.parse(localStorage.getItem('chapterStates')) || {};

    for (let i = 1; i <= 22; i++) {
        const chapterBox = document.createElement('div');
        chapterBox.className = 'chapter-box';
        chapterBox.textContent = `1 Nephi ${i}`;
        
        // Set the text color based on saved state
        if (chapterStates[`1 Nephi ${i}`]) {
            chapterBox.style.color = 'green';
        }

        // Add event listener to change text color to green on click
        chapterBox.addEventListener('click', () => {
            chapterBox.style.color = 'green';
            chapterStates[`1 Nephi ${i}`] = true;
            localStorage.setItem('chapterStates', JSON.stringify(chapterStates));
        });

        chapterContainer.appendChild(chapterBox);
    }
});
