// const p = new Promise(function(resolve, reject) {
//     console.log(resolve, reject);
// });
// console.log(p);

// const p = new Promise(function(resolve, reject) {
//     let value = 42;
//     resolve(value);
// });
// console.log(p);

// const p = new Promise(function(resolve, reject) {
//     let value = 42;
//     resolve(value);
// });
// p.then(function(result){
//     console.log(result);
// })

// above was synchronous code.... now let's make it asynchronous

// const p = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve('Time out!')
//     }, 2000);
// });

// console.log(p);

// p.then(function(result){
//     console.log(result);
// })

// const p = new Promise(function(resolve, reject) {
    
    // the success
    // setTimeout(function() {
    //     resolve('Time out!')
    // }, 2000)

    // the failure
//     setTimeout(function() {
//         reject('Something went wrong!')
//     }, 2000)
// });

// console.log(p);

// p.then(function(result){
//     console.log(result);
//     // this next part is there to successfully log the error
// }).catch(function(err) {
//     console.log(err)
// });

// const p = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve('hello');
//     }, 2000);
//   });
  
//   p.then(function(result) {
//     console.log(result);  // -> hello
//     return 42;
//   }).then(function(result) {
//     console.log(result);  // -> 42
//     return 'Done!'
//   }).then(function(result) {
//     console.log(result);  // -> Done!
//   });

function asyncAdd(a, b, delay) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(a + b);
        }, delay);
    });
}

// can be written like this or below
// asyncAdd(5, 10, 2000).then(function(sum) {
//     console.log(sum);
//     return asyncAdd(sum, 100, 1000);
// }).then(function(sum) {
//     console.log(sum);
//     return asyncAdd(sum, 1000, 2000);
// }).then(function(sum) {
//     console.log(sum);
// });

// this is the "neater" approach
// asyncAdd(5, 10, 2000)
// .then(function(sum) {
//     console.log(sum);
//     return asyncAdd(sum, 100, 1000);
// })
// .then(function(sum) {
//     console.log(sum);
//     return asyncAdd(sum, 1000, 2000);
// })
// .then(function(sum) {
//     console.log(sum);
// });

// this is from the controllers/movies.js.... 
// function index(req, red) {
//     Movie.find({}).then(function(movies) {
//         res.render('movies/index', { movies });
//     });
// }

//this is re-written as async/await...
// async function index(req, red) {
//     const movies = await Movie.find({});
//     res.render('movies/index', { movies });
// }

// let's refactor code from earlier to async await

// needed wrapper for replit.com
// (async function() {
//     let sum = await asyncAdd(5, 10, 2000);
//     console.log(sum);
//     let sum2 = await asyncAdd(sum, 100, 1000);
//     console.log(sum2);
//     let sum3 = await asyncAdd(sum2, 1000, 2000);
//     console.log(sum3);
// the additional (); is an IIFE (immediately invoked function expression... so invokes it)
// })();

(async function() {
    let sum = await asyncAdd(5, 10, 2000);
    console.log(sum);
    let sum2 = await asyncAdd(sum, 100, 1000);
    console.log(sum2);
    let sum3 = await asyncAdd(sum2, 1000, 2000);
    console.log(sum3);
// the additional (); is an IIFE (immediately invoked function expression... so invokes it)
})();