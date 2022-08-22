

document.onreadystatechange = function() {
    if (document.readyState === "loading") {
        document.querySelector("body").style.display = "none";
        document.querySelector(".loader").style.display = "block";
    } else {
        document.querySelector(".loader").style.display = "none";
        document.querySelector("body").style.display = "block";
    }
};


let output = document.querySelector(".output");
let posts = document.querySelector('.post1');
let images = document.querySelector(".image");
let  end = document.querySelector(".end");  
let photo = document.querySelector('.photo')
let username = document.querySelector('.username')
let date = document.querySelector('.date')
let post = document.querySelector('.post-container')
let section = document.querySelector('.posts')
console.log(post)

async function fetchAPI(url) {
    const response = await fetch(url);
    const response_json = await response.json();
    if (response.status == 200) {
        const img = document.createElement("img");
        img.src = response_json.message;
        images.append(img);
    }
}


async function fetchMessage(url){
    const response = await fetch(url);
    const response_json = await response.json();
    if(response.status == 200){
     output.textContent = response_json.data[0]
    }
}


async function fetchUser(url){
    const response = await fetch(url);
    const response_json = await response.json();
    if(response.status == 200){
       photo.src = response_json.results[0].picture.medium
       username.textContent = response_json.results[0].name.first +" " +response_json.results[0].name.last
       let Setdate = response_json.results[0].registered.date
    //    console.log(typeof Setdate)
    //    console.log(Setdate.toLocaleString())
    //  console.log(response_json.results[0])
    }
}

 function load() {
    fetchAPI('https:\/\/dog.ceo/api/breeds/image/random');
    fetchMessage('https://meowfacts.herokuapp.com/')
    fetchUser(' https://randomuser.me/api/')
};

load()

function newPosts(){
    let postCopy = post.cloneNode(true);
    section.appendChild(postCopy)
    console.log(postCopy)
}

const observer = new IntersectionObserver(entries => {
    console.log(entries)
})
observer.observe(section)

function addNewPost(){
    for(let i= 0;i < 2;i++){
        fetchAPI('https:\/\/dog.ceo/api/breeds/image/random');
        fetchMessage('https://meowfacts.herokuapp.com/')
    }
}






