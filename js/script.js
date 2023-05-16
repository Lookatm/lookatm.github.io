// toggle Class Active
const navbarNav = document.querySelector('.navbar-nav');


// ketika haamaburger menu di klik
document.querySelector('#hamburger-menu').onclick =() => {
    navbarNav.classList.toggle('active');
};

// klik di luaar side bar untuk hilangkan nav

const hamburger = document.querySelector('#hamburger-menu');


document.addEventListener('click', function(e){
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})