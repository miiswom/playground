// then method accepts 2 arguments:
// first: onFulfilled, do this
// second (optional): onRejected, do that
// Example: runFunction().then(successFunc, failureFunc);

function delay(time) {
  return new Promise(
    (resolve, reject) => {
      return setTimeout(resolve, time)
    })
}

function logHi() {
  console.log("Hi");
}

//delay(2000).then(logHi);

const myPromise = new Promise((resolve, reject) => {

  return setTimeout(resolve(1), 2000); //resolve(1) means, onFulfilled, return the value of 1
})
  .then(num => {
    //console.log(num)
    const res = (num += 2);
    //console.log(res)
    return res
  })
  .then(num => {
    //throw new Error("FAILED HERE") // exectution stops and resolves to a 'Rejected' state
    const res = (num += 2);
    //console.log(res);
    return res
  })
  .then(num => {
    const res = (num += 2);
    //console.log(res);
    return res
  })
  .catch(err => console.log(`${err}`))

//console.log(myPromise)

// Example from https://codeburst.io/javascript-es-2017-learn-async-await-by-example-48acc58bad65 

function doubleAfterTwoSeconds(num) {
  return new Promise((resolve, reject) => {
    //setTimeout(() => {
    resolve(num * 2)
    //}, 0)
  });
}

function addPromise(x) {
  return new Promise((resolve, reject) => {
    doubleAfterTwoSeconds(10)
      .then((a) => {
        doubleAfterTwoSeconds(20)
        .then((b) => {
          doubleAfterTwoSeconds(30)
          .then((c) => {
            resolve(x + a + b + c);
          })
        })
      })
  });
}

console.log(
  addPromise(10).then(value => console.log(value)) // 130
)

// the better solution:

async function addAsync(x) {
  const a = await doubleAfterTwoSeconds(10);
  const b = await doubleAfterTwoSeconds(20);
  const c = await doubleAfterTwoSeconds(30);

  return x + a + b + c
}

console.log(addAsync(20).then(value => console.log(value))) // 140