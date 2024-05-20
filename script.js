document.addEventListener('DOMContentLoaded', () => {
    const chapterContainer = document.getElementById('chapter-container');

    for (let i = 1; i <= 22; i++) {
        const chapterBox = document.createElement('div');
        chapterBox.className = 'chapter-box';
        chapterBox.textContent = `1 Nephi ${i}`;
        chapterContainer.appendChild(chapterBox);
    }
});