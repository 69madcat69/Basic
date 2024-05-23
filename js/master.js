// Toggle Spin class on Icon
document.querySelector(".toggle-settings .fa-gear").onclick= function(){
    this.classList.toggle("fa-spin");

    document.querySelector(".settings").classList.toggle("open");
}

// Select Landing page element
let landingPage = document.querySelector(".landing-page");

// Get array of images
let imgsArray = ["/img/1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

// change background image url  
landingPage.style.backgroundImage = 'url("img/3.jpg")'

// Get random number

setInterval(() => {
    let randomNum = Math.floor(Math.random() * imgsArray.length);
    landingPage.style.backgroundImage = 'url("img/'+ imgsArray[randomNum] +'")'
},7000);