//今日の日付を取得
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();

//今日の日付を呼び出す
console.log(year + '年' + month + '月' + date + '日');
