
let img = document.querySelector("#scroll-down img");
img.addEventListener("click", function(){
    var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var scrollAmount = (windowHeight * 100) / 100;
    // document.body.style.backgroundColor = "white";
    window.scrollBy({
        top: scrollAmount,
        left: 0,
        behavior: 'smooth'
    });
})
