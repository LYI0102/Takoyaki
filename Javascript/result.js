var newGmaescore = JSON.parse(localStorage.getItem('myCounter')) //將game的遊戲分數取的

var bestGamescore = localStorage.getItem('best_myCount') ? //設定最佳分數
    localStorage.getItem('best_myCount') : 0

var newScore = 0;

var newScoreDOM = document.getElementById('newScore')
var bestScoreDOM = document.getElementById('bestScore')
newScore = newGmaescore
$('#newScore').text(newGmaescore) //將取得的遊戲分數顯示
    //將取得的遊戲分數進行比較 顯示最佳的
if (newScore > parseInt(bestGamescore)) {
    localStorage.setItem('best_myCount', newScore)
    bestGamescore = newScore
}
$('#bestScore').text(bestGamescore)
    //但是目前設定清除 會把資料都清除 要另想辦法


//設定按鈕路徑
function resume() {
    window.location.href = 'index.html';
    localStorage.clear();

}
//設定按鈕路徑
function repeat() {

    window.location.href = 'game.html';
    localStorage.clear();
}