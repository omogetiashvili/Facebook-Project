const postbutton = document.querySelector("#postbtn")
const jsdiv = document.querySelector(".jsdiv")
const box = document.querySelector(".boxdiv")
const postbar = document.querySelector("#postbar")
const postbarvalue = document.querySelector(".postcontent")
const storedPostEmailArr = localStorage.getItem('PostEmailArr');
const parsedPostEmailArr = storedPostEmailArr ? JSON.parse(storedPostEmailArr) : [];
const posts = JSON.parse(localStorage.getItem('posts')) || [];




const users = localStorage.getItem("users");
let obj = {};


if (users) {
  obj = JSON.parse(users);
}


const authorOfPostMail = parsedPostEmailArr




const LoggedUsers = localStorage.getItem("logged users")
let loggedObj = {}


if (loggedObj) {
  loggedObj = JSON.parse(LoggedUsers)
}

let exactuser = loggedObj.reverse()[0].Email
let name = []
let lastname = []




const matchingUser = obj.find(user => user.Email === exactuser);

if (matchingUser) {
  name.push(matchingUser.Name);
  lastname.push(matchingUser.LastName);
}



postbar.placeholder = `What's on your mind, ${name.join("")}?`


postbutton.addEventListener("click", () => {


  GetToLocalStorage()
})






function GetToLocalStorage() {
  
  if (postbar.value !== "") {
    setTimeout(() => {

    let idCount = Math.random()

    const deleteBox = document.createElement("div"); 
    deleteBox.innerHTML = "X";
    deleteBox.className = "DeleteBox";


    deleteBox.addEventListener("click", () => {
      const updatedPosts = posts.filter(el => el.PostId !== post.PostId);
      localStorage.setItem('posts', JSON.stringify(updatedPosts));
  
      box.remove();
    });
  
     
    
    const post = {
      content: postbar.value,
      authorName: name.join(""),
      authorLastName: lastname.join(""),
      authorEmail: exactuser,
      PostId: idCount,
    };



    if(!parsedPostEmailArr.includes(post.authorEmail)){
      parsedPostEmailArr.push(post.authorEmail);
    }



    localStorage.setItem('PostEmailArr', JSON.stringify(parsedPostEmailArr));
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));

    
  
      const box = document.createElement("div");
      box.className = "boxdiv";
      box.innerHTML = `
      <div class="icon"></div>
      <div class="nameandlastnameinpost">
        <h1 class="authorofpost">${post.authorName}</h1>
        <h1 class="authorofpost">${post.authorLastName}</h1>
      </div>
         <div class="PostedAgoDiv"> <h4>Posted Just Now </h4> </div>
      <div>
        <h2 class="postcontent">${post.content}</h2>
      </div>

      <div class="likeIcon"> <img class="LoveIcon" src="./assets/fbloveicon.png" alt=""> </div>

      <div class="PostLine"> </div>

      <div class="LikeCommentShareDiv"> 
       <div class="like"><img class = "LikeIcon" src="./assets/1664220.png" alt="">  <span class="LikeCommentShareText">Like</span> </div>
        <div class="like"><img class = "commentbutton" src="./assets/commentsvg.svg" alt=""> <span class="LikeCommentShareText">Comment</span> </div>
        <div class="like"><img class = "sharebutton" src="./assets/share.png"> <span class="LikeCommentShareText">Share</span> </div>
      </div>

      <div class="threedots">
        <div> </div>
        <div> </div>
        <div> </div>
      </div>

      
    `;
      box.appendChild(deleteBox)
      jsdiv.append(box);
      postbar.value = "";
      return box;

    }, 500);
  }
  
}



function displayPostsFromLocalStorage() {

  authorOfPostMail.forEach((el) => {
    if (el === exactuser) {
      posts
        .filter(post => post.authorEmail === el)
        .forEach(post => {
          const box = document.createElement("div");
          box.className = "boxdiv";
          box.innerHTML = `
            <div class="icon"></div>
            <div class="nameandlastnameinpost">
              <h1 class="authorofpost">${post.authorName}</h1>
              <h1 class="authorofpost">${post.authorLastName}</h1>
            </div>
            <div class="PostedAgoDiv"> <h4>Posted Just Now </h4> </div>
            <div>
              <h2 class="postcontent">${post.content}</h2>
            </div>

            <div class="likeIcon"> <img class="LoveIcon" src="./assets/fbloveicon.png" alt=""> </div>

            <div class="PostLine"> </div>

            <div class="LikeCommentShareDiv"> 
             <div class="like"><img class = "LikeIcon" src="./assets/1664220.png" alt="">  <span class="LikeCommentShareText">Like</span> </div>
              <div class="like"><img class = "commentbutton" src="./assets/commentsvg.svg" alt=""> <span class="LikeCommentShareText">Comment</span> </div>
              <div class="like"><img class = "sharebutton" src="./assets/share.png"> <span class="LikeCommentShareText">Share</span> </div>
            </div>

            <div class="threedots">
              <div> </div>
              <div> </div>
              <div> </div>
            </div>
    

            `;


            const deleteBox = document.createElement("div");
            deleteBox.innerHTML = "X";
            deleteBox.className = "DeleteBox";
  
            deleteBox.addEventListener("click", () => {
              const updatedPosts = posts.filter(el => el.PostId !== post.PostId);
              localStorage.setItem('posts', JSON.stringify(updatedPosts));
              box.remove();
            });



            box.appendChild(deleteBox);
            jsdiv.append(box);
        });
    }
  });
}


displayPostsFromLocalStorage();















