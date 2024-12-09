// 変数numに1～15までのランダムな整数を代入する
let num = Math.floor(Math.random() * 16) + 1;

//変数numの値を出力する
console.log(num);

// ||変数numが3の倍数または5の倍数である場合の時に変数numは「3と5の倍数です」と表示
if (num % 3 === 0 && num % 5 === 0) {
    console.log('3と5の倍数です');
} else if (num % 3 === 0) {
    //変数numが3の倍数だけである場合にこれを出力
    console.log('3の倍数です');
} else if (num % 5 === 0) {
    //変数numが5の倍数だけである場合にこれを出力
    console.log('5の倍数です');
}
//それ以外のときは、変数numの値を出力と表示
else {
    console.log(num);
}
