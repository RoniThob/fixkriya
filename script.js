// toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// toggle untuk searc form active

const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

// klik di luar sidebar untuk menghilangkan nav
const hm = document.querySelector ('#hamburger-menu');
const sb =document.querySelector('#search-button')

document.addEventListener('click', function(e){
    if(!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }


    if(!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
});


var slideIndex = 1 
    showSlide(slideIndex);
    
    function nextslide (n) {
        showSlide(slideIndex += n);
    }

    function dotslide (n){
        showSlide(slideIndex = n)
    }

    function showSlide(n) {
        var i ;
        var slides = document.getElementsByClassName("imgslide")
        var dot = document.getElementsByClassName("dot")

        if (n > slides.length) {
            slideIndex = 1
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        for (i = 0; i <slides.length; i++) {
            slides[i].style.display = "none";
        }
       
        for (i = 0; i <slides.length; i++) {
            dot[i].className= dot [i].className.replace(" aktif", "" );
        }

        slides [slideIndex - 1].style.display = "block";

        dot [slideIndex - 1].className += " aktif";
    }


    function videosliderv(links) {
        document.querySelector(".sliderv").src = links;
    }