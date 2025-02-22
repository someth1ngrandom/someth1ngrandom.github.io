const cat = document.querySelector("#cat");
const catstuff = document.querySelector("#catstuff");
const loader = document.querySelector("#loader");
const newcatbtn = document.querySelector(".newcatbtn");

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

    const newImg = new Image();
    newImg.src = "https://cataas.com/cat?t=" + new Date().getTime();
    newImg.onload = () => {
        cat.src = newImg.src;

        catstuff.classList.remove("hidden");
        loader.classList.add("hidden");
    };

    newImg.onerror = () => {
        loader.innerHTML = "an error occured! the image probably failed to load";
    };

});