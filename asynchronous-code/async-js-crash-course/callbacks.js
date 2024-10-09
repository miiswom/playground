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
function createPost(post, callback) {
 setTimeout(() => {
  posts.push(post);
  // after that post is pushed, wait 2 seconds to do something with it (in this example, use getPost()):
  callback();
 }, 2000)
};

getPosts()
createPost({title: "Post Three", body: "This is post three"}, getPosts)