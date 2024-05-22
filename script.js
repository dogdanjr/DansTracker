document.addEventListener('DOMContentLoaded', () => {
    const chapterContainer = document.getElementById('chapter-container');

    for (let i = 1; i <= 22; i++) {
        const chapterBox = document.createElement('div');
        chapterBox.className = 'chapter-box';
        chapterBox.textContent = `1 Nephi ${i}`;
        
        // Add 'completed' class to specific chapters if needed
        if (i === 1 || i === 2 || i === 3 || i === 4 || i === 5 || i === 6 || i === 7 || i === 8 || i === 9 || i === 10 || i === 11 ) {
            chapterBox.classList.add('completed'); // Example: Mark chapter 1 as completed
        }

        chapterContainer.appendChild(chapterBox);
    }
});
