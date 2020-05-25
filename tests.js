// var currentTime = new Date();

// var currentOffset = currentTime.getTimezoneOffset();

// console.log("time", currentTime);
// console.log("time", currentOffset);
// var ISTOffset = 330;
// var ISTTime = new Date(
//   currentTime.getTime() + (ISTOffset + currentOffset) * 60000
// );
// console.log("ISTTime", ISTTime);

// var hoursIST = ISTTime.getHours();
// var minutesIST = ISTTime.getMinutes();

// console.log("time", hoursIST);
// console.log("time", minutesIST);
// console.log("getTime", currentTime.getTimezoneOffset());

// var date1 = new Date();
// // var date2 = new Date(year, month, day, hours, minutes, seconds, milliseconds);
// // var date3 = new Date(milliseconds);
// // var date4 = new Date(dateString);
// var d = new Date("03/25/2015");

// console.log("time1", date1);
// // console.log("time2", date3);
// // console.log("time3", date4);
// console.log("time4", d);
var d = new Date().toLocaleTimeString();
console.log("toLocaleTimeString()", d);
