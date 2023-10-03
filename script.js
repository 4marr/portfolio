//preloader
var loader = document.getElementById('loader');

window.addEventListener('load', function(){
    loader.style.display = 'none';
});

// toogle icon navbar
let menuIcon = document.querySelector('.menu-toggle');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('slide');
    navbar.classList.toggle('active');
};

// scroll section ative
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav ul li a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // remove toggle icon and navbar when click navbar link (scroll)
    navbar.classList.remove('slide');
    document.getElementById("checkbox").checked = false;
};

//hamburger menu
var menuToggle = document.querySelector('.menu-toggle input');
var nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});

//greetings
var greetElem = document.querySelector("#greetings"); 
var curHr = new Date().getHours(); 
var greetMes = ["Tidur bang", 
"Good morning", 
"Good afternoon", 
"Selamat sore!", 
"Good evening", 
"Good night"]; 
let greetText = ""; if (curHr < 4) greetText = greetMes[0]; 
else if (curHr < 11) greetText = greetMes[1]; 
else if (curHr < 18) greetText = greetMes[2]; 
//else if (curHr < 17) greetText = greetMes[3]; 
else if (curHr < 21) greetText = greetMes[4]; 
else greetText = greetMes[5]; 
greetElem.setAttribute('data-content', greetText);

//darkmode
var icon = document.getElementById("icon")

icon.onclick = function fadeIn(){
    document.body.classList.toggle("darkTheme");
    if(document.body.classList.contains("darkTheme")){
        icon.src = "lightmode.svg";
    }else{
        icon.src = "darkmode.svg";
    }
}

var typed = new Typed('#typed', {
         strings: ["Programmer", "Web Developer", "Frontend Developer", "Junior Developer"],
         typeSpeed: 60,
         backSpeed: 60,
         loop: true
     });

var back = document.getElementById('pnh')
var linkTop = document.querySelector('.back')

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 100){
        back.classList.add('show');
        linkTop.classList.add('muncul');
    }else{
        back.classList.remove('show');
        linkTop.classList.remove('muncul');
    }
});