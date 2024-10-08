
// // const img = document.querySelector('img');
// // /* ------> TOP --- */
// // // using promises
// // fetch('https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats', { mode: 'cors' })
// //   .then(function (response) {
// //     return response.json();
// //   })
// //   .then(function (response) {
// //     img.src = response.data.images.original.url;
// //   });


// /*------> javascrip.info*/

// // using async await
// async function getCats() {
//   const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats', { mode: 'cors' });
//   const catData = await response.json();
//   img.src = catData.data.images.original.url
// };

// // Writing this: 
// async function f() {
//   return 1;
// } // is the same as writing this:
// async function f() {
//   return Promise.resolve(1);
// }

// // Writing this:
// // ---> promise.then() // is the same as writing:
// // ---> await promise

// // Tasks:

// /*1 --- Rewrite using async/await

// Rewrite this example code from the chapter Promises chaining using async/await instead of .then/catch:

// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     });
// }

// loadJson('https://javascript.info/no-such-user.json')
//   .catch(alert); // Error: 404
  
// */

// async function loadJson(url) {
//   let response = await fetch(url)

//   if (response.status === 200) {
//     let json = await response.json()
//     return json
//   } else {
//     throw new Error(response.status)
//   }
// }

// loadJson('https://javascript.info/no-such-user.json')
//   .catch(alert); // Error: 404

// /*2 --- Rewrite "rethrow" with async/await
// Below you can find the “rethrow” example. Rewrite it using async/await instead of .then/catch.

// And get rid of the recursion in favour of a loop in demoGithubUser: with async/await that becomes easy to do. 

// class HttpError extends Error {
//   constructor(response) {
//     super(`${response.status} for ${response.url}`);
//     this.name = 'HttpError';
//     this.response = response;
//   }
// }

// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new HttpError(response);
//       }
//     });
// }

// // Ask for a user name until github returns a valid user
// function demoGithubUser() {
//   let name = prompt("Enter a name?", "iliakan");

//   return loadJson(`https://api.github.com/users/${name}`)
//     .then(user => {
//       alert(`Full name: ${user.name}.`);
//       return user;
//     })
//     .catch(err => {
//       if (err instanceof HttpError && err.response.status == 404) {
//         alert("No such user, please reenter.");
//         return demoGithubUser();
//       } else {
//         throw err;
//       }
//     });
// }

// demoGithubUser();
// */

// class HttpError extends Error {
//   constructor(response) {
//     super(`${response.status} for ${response.url}`);
//     this.name = 'HttpError';
//     this.response = response;
//   }
// }

// async function loadJsonTwo(url) {
//   let response = await fetch(url);
//   if (response.status === 200) {
//     const json = await response.json();
//     return json
//   } else {
//     throw new HttpError(response)
//   }
// }

// async function demoGithubUser() {
//   let user;
//   while (true) { // will run until it is broken with 'break' or 'return' 
//     let name = prompt("Enter a name?", "iliakan")

//     try {
//       user = await loadJson(`https://api.github.com/users/${name}`)
//       break; // no error so exit the while loop
//     } catch (err) {
//       if (err instanceof HttpError && err.response.status == 404) {
//       // inside the while loop so it will return to the promt function
//         alert("No such user, please reenter.");
//       } else {
//         throw err
//       }
//     }
//   }
//   alert(`Full name: ${user.name}.`);
//   return user
// }

// demoGithubUser()


/* 3---  Call async from non-async
We have a “regular” function called f. How can you call the async function wait() and use its result inside of f?*/


async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  // ...what should you write here?
  // we need to call async wait() and wait to get 10
  // remember, we can't use "await"
  wait().then(result => console.log(result))
  // then method make sure we get that value back !
}

console.log(f())
