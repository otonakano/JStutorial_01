 myTbl = new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat");
 myD = new Date();

 myDay = myD.getDay();

 myDayN = myTbl[myDay];

 document.write(myDayN);