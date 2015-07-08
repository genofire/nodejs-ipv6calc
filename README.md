# nodejs-ipv6calc

## Install

    npm install ipv6calc

## Example

```javascript
var ipv6calc = require('./index');


var mac = "00-11-22-33-44-55";
var ip = "2001:db8::211:22ff:fe33:4455";
console.log(ip);
//2001:db8::211:22ff:fe33:4455

console.log(ipv6calc.toMAC(ip));
/*
00:11:22:33:44:55

Default: ipv6calc.toMAC(ip,':')
*/

console.log(mac);
//00-11-22-33-44-55

console.log(ipv6calc.toIPv6(mac));
/*
::211:22ff:fe33:4455

Default:ipv6calc.toIPv6('2001:bf7:540:0:',mac,64)
*/
console.log(ipv6calc.toIPv6('2001:bf7:540:0:',mac));
/*
2001:bf7:540:0:211:22ff:fe33:4455

Default:ipv6calc.toIPv6('2001:bf7:540:0:',mac,64)
*/
console.log(ipv6calc.fromIPv6(ip));
/*
{ net: '2001:db8::',
  host: '::211:22ff:fe33:4455',
  mac: '00:11:22:33:44:55' }
  
  Default:ipv6calc.fromIPv6(ip,64)
  */

```
