var han2en = require('./index.js');

var en = han2en('林泉');
console.log(en);
// linquan

var en2 = han2en('林泉', '-');
console.log(en2);
// lin-quan

var en3 = han2en('林泉', {
  initial: true
});
console.log(en3);
// lq

var en4 = han2en('林泉是帅哥', {
  sep: '-',
  initial: true
});
console.log(en4);
// l-q-s-s-g