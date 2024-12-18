const btn = document.getElementById('btn');
const text = document.getElementById('text');


// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
    console.log('ボタンをクリックしました');
    // 2秒（2000ミリ秒）後にボタンをクリックしましたと表示する
    setTimeout(() => {
    const text = document.getElementById('text');
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});

