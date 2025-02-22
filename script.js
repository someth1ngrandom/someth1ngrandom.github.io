const cat = document.querySelector("#cat");
const catstuff = document.querySelector("#catstuff");
const loader = document.querySelector("#loader");
const newcatbtn = document.querySelector(".newcatbtn");
const requestbtn = document.querySelector("#request");
const tagsinput = document.querySelector("#tags");
const regex = /^[a-z0-9 ,_-]+$/i;
const isSafe = (input) => { return regex.test(input); };

let global = {};
global.catImgUrl = "https://cataas.com/cat?t=" + new Date().getTime();

if (Math.random() < 1/50) {
    document.querySelector("body").style.backgroundImage = "url(pp.png)";
    document.querySelector("body").style.backgroundColor = "dimgray";
    setTimeout(()=>{alert("FORTNITE MODE ACTIVATED");},100);
}

if (!cat.complete) {
    cat.addEventListener("load", () => {
        catstuff.classList.remove("hidden");
        loader.classList.add("hidden");
    });

    cat.addEventListener("error", () => {
        loader.innerHTML = "an error occured! the image probably failed to load";
    });
}

newcatbtn.addEventListener("click", () => {
    catstuff.classList.add("hidden");
    loader.classList.remove("hidden");
    loader.innerHTML = "loading cat...";

    global.catImgUrl = "https://cataas.com/cat?t=" + new Date().getTime();
    const newImg = new Image();
    newImg.src = global.catImgUrl;
    newImg.onload = () => {
        cat.src = newImg.src;

        catstuff.classList.remove("hidden");
        loader.classList.add("hidden");
    };

    newImg.onerror = () => {
        loader.innerHTML = "an error occured! the image probably failed to load";
    };

});

requestbtn.addEventListener("click", () => {
    const tags = tagsinput.value;
    if (!isSafe(tags)) return;

    catstuff.classList.add("hidden");
    loader.classList.remove("hidden");



    global.catImgUrl = `https://cataas.com/cat/${tags}?t=${new Date().getTime()}`;
    console.log(global.catImgUrl);
    const newImg = new Image();
    newImg.src = global.catImgUrl;
    newImg.onload = () => {
        cat.src = newImg.src;

        catstuff.classList.remove("hidden");
        loader.classList.add("hidden");
    };

    newImg.onerror = () => {
        loader.innerHTML = "an error occured! the image probably failed to load or there was no cat found with your inputted tags";
    };
});