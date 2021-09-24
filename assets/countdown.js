function set2fig(num) {
    var ret;
    if( num < 10 ) { ret = "0" + num; }
    else { ret = num; }
    return ret;
 }
 function isNumOrZero(num) {
    if( isNaN(num) ) { return 0; }
    return num;
 }

 function showCountdown() {
    var nowDate = new Date();
    var dnumNow = nowDate.getTime();

    var inputYear  = document.getElementById("userYear").value;
    var inputMonth = document.getElementById("userMonth").value - 1;
    var inputDate  = document.getElementById("userDate").value;
    var inputHour  = document.getElementById("userHour").value;
    var inputMin   = document.getElementById("userMin").value;
    var inputSec   = document.getElementById("userSec").value;
    var targetDate = new Date( isNumOrZero(inputYear), isNumOrZero(inputMonth), isNumOrZero(inputDate), isNumOrZero(inputHour), isNumOrZero(inputMin), isNumOrZero(inputSec) );
    var dnumTarget = targetDate.getTime();
  
    var dlYear  = targetDate.getFullYear();
    var dlMonth = targetDate.getMonth() + 1;
    var dlDate  = targetDate.getDate();
    var dlHour  = targetDate.getHours();
    var dlMin   = targetDate.getMinutes();
    var dlSec   = targetDate.getSeconds();
    var msg1 = dlYear + "/" + dlMonth + "/" + dlDate + " " + set2fig(dlHour) + ":" + set2fig(dlMin) + ":" + set2fig(dlSec);
  
    var diff2Dates = dnumTarget - dnumNow;
    if( dnumTarget < dnumNow ) {
       diff2Dates *= -1;
    }
  
    var dDays  = diff2Dates / ( 1000 * 60 * 60 * 24 );   // 日数
    diff2Dates = diff2Dates % ( 1000 * 60 * 60 * 24 );
    var dHour  = diff2Dates / ( 1000 * 60 * 60 );   // 時間
    diff2Dates = diff2Dates % ( 1000 * 60 * 60 );
    var dMin   = diff2Dates / ( 1000 * 60 );   // 分
    diff2Dates = diff2Dates % ( 1000 * 60 );
    var dSec   = diff2Dates / 1000;   // 秒

    
    var msg2 = set2fig(Math.floor(dDays)) + "日"
             + set2fig(Math.floor(dHour)) + "時間"
             + set2fig(Math.floor(dMin)) + "分"
             + set2fig(Math.floor(dSec)) + "秒";
  
    // 表示文字列の作成
    var msg;
    if( dnumTarget > dnumNow ) {
       // まだ期限が来ていない場合
       msg = '<span style="font-size: 30px;">' + msg1 + '</span>' + 'まで<br>残り<span style="font-size: 70px;">' + msg2 + "</span>です。";
    }
    else {
       // 期限が過ぎた場合
       msg = '<span style="font-size: 30px;">' + msg1 + '</span>からは<br><span style="font-size: 70px;">' + msg2 + "</span>経ちました。";
    }
  
    // 作成した文字列を表示
    document.getElementById("RealtimeCountdownArea").innerHTML = msg;
 }
 // 1秒ごとに実行
 setInterval('showCountdown()',1);

