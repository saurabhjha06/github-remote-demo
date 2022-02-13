/*var a=8;
//using node inbuilt modules

var b=12;
var c=a+b;

console.log("sum"+c);
*/
var os_info=require('os');
console.log("os type" +os_info.type());
console.log("os type" +os_info.version());
console.log("os type"+os_info.hostname());

//adding some more os methods
console.log("os uptime"+os.uptime());

