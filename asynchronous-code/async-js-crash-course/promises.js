// Creating Blog posts
const posts = [
  {title: "Post One", body: "This is post one"},
  {title: "Post One", body: "This is post one"}
];

function getPosts() {
  setTimeout(()=> {
    let output = "";
    // Looping through the 'posts'
    posts.forEach((post, index) => {
      // Appending each posts
      output += `<li>${post.title}</li>`;
    });
    // after 1000 seconds, it will output them out on the body page
    document.body.innerHTML = output;
  }, 1000)
};

// this 2 sec and the dom was already printed so it won't show
function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false
      // after that post is pushed, wait 2 seconds to do something with it (in this example, use getPost()):
      if(!error) {
        resolve()
      } else {
        reject("Error: something went wrong")
      }
     }, 2000)
  })
};

// createPost({title: "Post Three", body: "This is post three"})
// .then(getPosts)
// .catch(err => console.log(err))

const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout((resolve), 2000, "Goodbye")
});

Promise.all([promise1, promise2, promise3])
.then((values) => (values))