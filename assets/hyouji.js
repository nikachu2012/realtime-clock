function set2fig(num) {
    // 桁数が1桁だったら先頭に0を加えて2桁に調整する
    var ret = num;
    if( num < 10 ) { ret = "0" + num; }
    return ret;
}

function showClock2() {
  var nowdate = new Date();
  var year = nowdate.getFullYear();     // 年(4桁の西暦)
  var mon  = nowdate.getMonth() + 1;    // 月(1～12)
  var date = nowdate.getDate();         // 日(1～31)
  var week = nowdate.getDay();          // 曜日(※0～6)
  var weekchars = new Array( "日", "月", "火", "水", "木", "金", "土" );
  var todayweek = weekchars[ week ];   // 曜日を文字列で得る
  var hour = nowdate.getHours();        // 時(0～23)
  var min  = nowdate.getMinutes();      // 分(0～59)
  var sec  = nowdate.getSeconds();      // 秒(0～59)
  var msec = nowdate.getMilliseconds(); // ミリ秒(0～999)
  var time = (set2fig(hour) + "時" + set2fig(min) + "分" + set2fig(sec) + "秒");
  var day = (year + "年" + mon + "月" + date + "日" + "（" + todayweek + "）")
   document.getElementById("RealtimeClockArea2").innerHTML = time;
   document.getElementById("RealtimeClockArea3").innerHTML = day;
}
setInterval('showClock2()',1);

/*   function set2fig(num) {
   // 桁数が1桁だったら先頭に0を加えて2桁に調整する
   var ret;
   if( num < 10 ) { ret = "0" + num; }
   else { ret = num; }
   return ret;
}
function showClock2() {
   var nowTime = new Date();
   var nowHour = set2fig( nowTime.getHours() );
   var nowMin  = set2fig( nowTime.getMinutes() );
   var nowSec  = set2fig( nowTime.getSeconds() );
   var msg = "現在時刻は、" + nowHour + ":" + nowMin + ":" + nowSec + " です。";
   document.getElementById("RealtimeClockArea2").innerHTML = msg;
}
setInterval('showClock2()',1);  */
