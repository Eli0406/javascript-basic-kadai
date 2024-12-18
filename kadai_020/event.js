// body要素を取得し、中身を出力する
console.log(document.body);

// HTML要素をidで取得し、中身を出力する
console.log(document.getElementById('text'));

// output-btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
 
// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  text.textContent= 'ボタンをクリックしました！';
});
