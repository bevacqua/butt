'use strict';

var butt = require('./');
var n = [1, 2, 3, 4, 5];
var m = ['1a', '2a', '3a', '4a', '5a'];

n.forEach(console.log);

n.forEach(butt(console.log, 1));

m.map(parseInt).forEach(butt(console.log, 1));

m.map(butt(parseInt, 1)).forEach(butt(console.log, 1));
