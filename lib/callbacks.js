// wait function will have 2 params ( seconds, callback )
function wait(seconds, callback) {
  // setTimeout( callback, ms )
  // 1000ms = 1 second
  // Since the wait function uses seconds we need to * 1000 to convert it into ms
  setTimeout(callback, seconds * 1000);
  console.log('wait 3 started');
}

// repeat functino will have 2 params ( times, callback )
function repeat (times, callback) {
// invoke callback, n times .. value of n is times,
// callback must have one argument increasing everytime callback is passed
var arg = 0;
  while ( times > 0 ) {
    callback(arg++);
    times--;
  }
}

function User () {

}

module.exports = {
  wait : wait,
  repeat : repeat,
  User : User
};