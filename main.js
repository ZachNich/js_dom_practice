const firstHeaderEl = document.querySelector(".article__header");

firstHeaderEl.textContent = 'Welcome to the Zach blog';

const allHeaderEl = document.querySelectorAll(".article__header");

for (let i = 0; i < allHeaderEl.length; i++) {
    allHeaderEl[i].classList.add('important');
};

const dashed = document.querySelector(".dashed");

dashed.classList.remove('dashed');

const footerEl = document.querySelector('.article__footer')

footerEl.classList.add('goldenrod')