//月日と曜日を取得して指定のidに出力

var nObj = new Date();

var month = nObj.getMonth() + 1;		//月
var date = nObj.getDate();					//日

var weekDayEN = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var wDE = weekDayEN[nObj.getMonth()];

 //p id="ibjv2js02"に出力
 document.write(wDE + " "+ date);
