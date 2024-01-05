const clickBtn = document.getElementById('btn');

clickBtn.addEventListener('click', () => {
    const changeText = document.getElementById('text');
    changeText.textContent = 'ボタンをクリックしました';
});