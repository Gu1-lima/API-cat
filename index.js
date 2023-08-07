let btn = document.querySelector(".btn");

btn.addEventListener("click", ()=>{
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(response => response.json())
    .then(upImage);
})

let upImage = (value)=>{
    let url = value[0].url;
    let img = document.querySelector(".img");
    img.setAttribute("src", url);
    
}