// EXERCISE REQUIRED JS, 
// affects .article__header, .article__footer, and .dashed

// changing content of first header

const firstHeader = document.querySelector(".article__header");

firstHeader.textContent = 'Welcome to the Zach blog';

// adding .important class to all headers

const allHeader = document.querySelectorAll(".article__header");

for (let i = 0; i < allHeader.length; i++) {
    allHeader[i].classList.add('important');
};

// removing .dashed class

const dashed = document.querySelector(".dashed");

dashed.classList.remove('dashed');

// adding .goldenrod class to footer

const footerArticle = document.querySelector('.article__footer')

footerArticle.classList.add('goldenrod')

// PERSONAL JS ADDED

// checks which header nav button is current page and highlights it

let navs = document.querySelectorAll('.nav__header a');

for (i = 0; i < navs.length; i++) {
    if (navs[i].href == window.location.href) {
        navs[i].parentNode.classList.add('active');
    };
};