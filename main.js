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

// creating object for articles containing specific article info

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
    link: '#',
}

let previous_article = {
    title: 'Though Not Without Effort',
    description: 'Adding CSS to websites is never as simple as it seems.',
    author: {
        name: 'Zach Nicholson',
        position: 'Student',
        specialty: 'None',
        description: 'Zach Nicholson is dedicated. There\'s no doubt about it. But does he have the wherewithal to survive 6 months of training without a paycheck?'
    },
    wordcount: 420,
    updated: {
        day: 15,
        month: 'April',
        year: 2020
    },
    link: '#',
}

let next_article = {
    title: 'Sustainability Key Concern for Students without Means',
    description: 'Is being poor totally okay now? Prospective and veteran students chime in.',
    author: {
        name: 'Zach Nicholson',
        position: 'Student',
        specialty: 'None',
        description: 'Zach Nicholson is dedicated. There\'s no doubt about it. But does he have the wherewithal to survive 6 months of training without a paycheck?'
    },
    wordcount: 666,
    updated: {
        day: 20,
        month: 'April',
        year: 2020
    },
    link: '#',
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

// adds .article__header--end class to last header

const allHeaders = document.querySelectorAll('.article__header');
const lastHeader = allHeaders[allHeaders.length - 1];
lastHeader.classList.add('article__header--end');

// inserts info from article object to places in title

document.querySelector('.article__title').textContent = `${copper_mug_article.title}`;
document.querySelector('.article__subtitle').textContent = `${copper_mug_article.description}`;
document.querySelector('.article__info').textContent = `${copper_mug_article.updated.month} ${copper_mug_article.updated.day}, ${copper_mug_article.updated.year} • ${copper_mug_article.wordcount} words written by ${copper_mug_article.author.name}`;

// inserts appropriate article title and link into bottom article nav

const articleNav = document.querySelector('.article__footer').children;
articleNav[0].innerHTML = `<a href="${previous_article.link}">🡄 Previous<br>${previous_article.title}</a>`;
articleNav[0].classList.add('article__prev');
articleNav[1].innerHTML = `<a href="${next_article.link}">Next 🡆<br>${next_article.title}</a>`;
articleNav[1].classList.add('article__next');

// inserts nav information into footer nav

const footerNav = document.querySelector('.footer__container').children;
footerNav[0].innerHTML = `<ul><li><a href="#">About</a></li><li><a href="#">Contact</a></li><li><a href="#">Jobs</a></li><li><a href="#">News</a></li><li><a href="#">Store</a></li></ul>`;
footerNav[0].classList.add('footer__nav--internal');
footerNav[1].innerHTML = `<ul><li><a href="#">Newsletter</a></li><li><a href="#">Podcast</a></li><li><a href="#">RSS</a></li><li><a href="#">Twitter</a></li></ul>`;
footerNav[1].classList.add('footer__nav--social');