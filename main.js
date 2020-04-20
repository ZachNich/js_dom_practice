// EXERCISE REQUIRED JS, 
// affects .article__header, .article__footer, and .dashed

// changing content of first header

// const firstHeader = document.querySelector('.article__header');

// firstHeader.textContent = 'Welcome to the Zach blog';

// // adding .important class to all headers

// const allHeader = document.querySelectorAll('.article__header');

// for (let i = 0; i < allHeader.length; i++) {
//     allHeader[i].classList.add('important');
// };

// // removing .dashed class

// const dashed = document.querySelector('.dashed');

// dashed.classList.remove('dashed');

// // adding .goldenrod class to footer

// const footerArticle = document.querySelector('.article__footer')

// footerArticle.classList.add('goldenrod')





// PERSONAL JS ADDED

// creating object for article containing specific article info

let copper_mug_article = {
    title: 'Copper Mug Small Batch',
    description: 'Humblebrag blue bottle before they sold out.',
    author: {
        name: 'Steve Brownlee',
        position: 'Instructor',
        specialty: 'Web Development',
        description: 'Steve Brownlee is dedicated to helping teach the next generation of software developers by providing people with a solid understand of the core technologies used today, and then expanding into how to be a valuable contributor.'
    },
    wordcount: 583,
    updated: {
        day: 19,
        month: 'April',
        year: 2020
    },
}

// checks which header nav button is current page and highlights it

const navs = document.querySelectorAll('.nav__header a');

for (i = 0; i < navs.length; i++) {
    if (navs[i].href == window.location.href) {
        navs[i].parentNode.classList.add('active');
    };
};

// adds .article__header--main class to first header

const firstHeader = document.querySelector('.article__header');
firstHeader.classList.add('article__header--main');

// inserts info from article object to places in title

document.querySelector('.article__title').textContent = `${copper_mug_article.title}`;
document.querySelector('.article__subtitle').textContent = `${copper_mug_article.description}`;
document.querySelector('.article__info').textContent = `${copper_mug_article.updated.month} ${copper_mug_article.updated.day}, ${copper_mug_article.updated.year} • ${copper_mug_article.wordcount} words written by ${copper_mug_article.author.name}`;
