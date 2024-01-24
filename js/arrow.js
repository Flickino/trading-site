
let img = document.querySelector("#scroll-down img");

img.addEventListener("click", function(){
    var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var scrollAmount = (windowHeight * 100) / 100;
    window.scrollBy({
        top: scrollAmount,
        left: 0,
        behavior: 'smooth'
    });
})
document.getElementById('scroll-button').addEventListener('click', function() {
    // Scroll down by a certain amount when the button is clicked
    window.scrollBy({
        top: 100, // Adjust the scroll amount as needed
        left: 0,
        behavior: 'smooth' // Smooth scrolling animation
    });
});
