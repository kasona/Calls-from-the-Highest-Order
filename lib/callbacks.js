// ======================== wait =======================
// wait function will have 2 params ( seconds, callback )
function wait(seconds, callback) {
  // setTimeout( callback, ms )
  // 1000ms = 1 second
  // Since the wait function uses seconds we need to * 1000 to convert it into ms
  setTimeout(callback, seconds * 1000);
  console.log('wait 3 started');
}
// === test wait ===
// invoke wait with 3 as 1st  arg. unnamed callback function as 2nd arg
// first message will print immediately, 2nd message will print 3 seconds later
  // wait( 3, function() {
  //   console.log('3 is done');
  // });

// ========================== Repeat ========================
// repeat function will have 2 params ( times, callback )
function repeat (times, callback) {
// invoke callback, n times .. value of n is times,
// callback must have one argument increasing everytime callback is passed
var arg = 0;
  while ( times > 0 ) {
    callback(arg++);
    times--;
  }
}
// // === test repeat ===
// // use 10 as 1st arg, callback as 2nd.
// // callback function accepts iteration
// repeat(10, function (iteration) {
//   // console.log 100 + iteration, should print numbers 100 - 109
//   console.log('banana: ' + 100 + iteration);
// });

// // ===  test wait and repeat ===
// // 1. wait 4 seconds
// wait ( 4, function() {
//   //2. repeat following steps 2 times
//   repeat ( 2, function(n) {
//     //3. console.log 'repeating for i' n, n is current iteration from repeat
//     console.log('repeating for i ' + n);
//     // 4. wait [n] * 3 seconds before continuing next step
//     wait ( 3 * n, function() {
//       //5. repeat next step 3 times
//       repeat ( 3, function(m) {
//         console.log ('i ' + n +  ' j ' + m);
//       });
//     });
//   });
// });

// =========================== User ===========================
//import module

//empty class named User with 0 arguments
function User () {
}
var testUsers = require('./datastore.js').User;

User.find = function(query, callback){
  // mock object replicating the User object
  var schema = {id: 'number', name: 'string', mood: 'string'};
  // Empty array
  var foundUsers = [];
  // Finding the keys in Query, need to check if it has keys
  // Don't know what the Query contains
  var keysInQuery = Object.keys(query);

  // find if the keys in query are in key in schema(a mock object of User)
  var hasKeys = keysInQuery.every(function(key){
    console.log(schema[key]);
    return schema[key] ? true : false;  // returns true or false
  });
  // Check if tkeys exist
  if(!hasKeys){
    return callback(new RangeError('Error, matching keys not found'),foundUsers);
  }
  // check if all the type of values match

  var hasTypes = keysInQuery.every(function(key){
    return schema[key] === typeof query[key] ? true : false;
  });
  if(!hasTypes){
    return callback(new TypeError('Didnt find matching type'), foundUsers);
  }

  testUsers.forEach(function(user){
    var matches = keysInQuery.every(function(key){
      return user[key] === query[key] ? true : false;
    });
    if(matches){
      foundUsers.push(user);
    }
  });
  return callback(null, foundUsers);
};

User.find({ id : 2},function(error, users){
  if(error){
    throw error;
  }else{
    console.log('user result is ' + users);
  }

});
// use for in loop
// go through the array once to find all the users
// go through the array again to go through all the keys, search for the values, store that into a variable
// use that to compare with the type of query ( hasOwnProperty )
//keys match, types of values match, user has all keys and all values matching



module.exports = {
  wait : wait,
  repeat : repeat,
  User : User
};