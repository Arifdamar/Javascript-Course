var models = [{
        name: 'Bojack Horseman',
        image: 'img/Bojack.jpg',
        link: 'https://www.imdb.com/title/tt3398228'
    },
    {
        name: 'Parasite',
        image: 'img/Parasite.jpg',
        link: 'https://www.imdb.com/title/tt6751668'
    },
    {
        name: 'Roma',
        image: 'img/Roma.jpg',
        link: 'https://www.imdb.com/title/tt6155172'
    },
    {
        name: 'Suspiria',
        image: 'img/Suspiria.jpg',
        link: 'https://www.imdb.com/title/tt1034415'
    },
    {
        name: 'The Favourite',
        image: 'img/TheFavourite.jpg',
        link: 'https://www.imdb.com/title/tt5083738'
    }
];

var index = 0;
showSlide(index);

document.querySelector('.fa-arrow-left').addEventListener('click', function () {
    index--;
    if (index < 0) {
        index = models.length - 1;
    }
    console.log(index);
    showSlide(index);
});

document.querySelector('.fa-arrow-right').addEventListener('click', function () {
    index++;
    if (index > models.length-1) {
        index = 0;
    }
    console.log(index);
    showSlide(index);
});

function showSlide(index) {
    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-img-top').setAttribute('src', models[index].image);
    document.querySelector('.card-link').setAttribute('href', models[index].link);
}