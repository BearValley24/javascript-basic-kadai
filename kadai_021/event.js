const clickBtn = document.getElementById('btn');

clickBtn.addEventListener('click', () => {
    const changeText = document.getElementById('text');
    setTimeout(() => {
        changeText.textContent = 'ボタンをクリックしました';
    },2000);
});