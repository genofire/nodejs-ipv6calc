var ipv6calc = require('./index');


var mac = "00-11-22-33-44-55";
var ip = "2001:db8::211:22ff:fe33:4455";
console.log(ip);
console.log(ipv6calc.toMAC(ip));
console.log(mac);
console.log(ipv6calc.toIPv6(mac));
console.log(ipv6calc.fromIPv6(ip));
console.log(ipv6calc.toIPv6('2001:bf7:540:0:',mac));
