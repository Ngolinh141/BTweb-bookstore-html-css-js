// JavaScript để xử lý sự kiện nút "Xem thêm" và "Rút gọn"
const expandButton = document.getElementById('expand-btn');
const collapseButton = document.getElementById('collapse-btn');
const textContainer = document.querySelector('.text-container');
const text = document.querySelector('.truncate-text');

expandButton.addEventListener('click', () => {
    text.style.overflow = 'visible';
    text.style.whiteSpace = 'normal';
    expandButton.style.display = 'none';
    collapseButton.style.display = 'block';
});

collapseButton.addEventListener('click', () => {
    text.style.overflow = 'hidden';
    text.style.whiteSpace = 'nowrap';
    expandButton.style.display = 'block';
    collapseButton.style.display = 'none';
});