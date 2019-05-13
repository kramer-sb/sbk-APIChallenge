const baseURL = 'https://api.nal.usda.gov/ndb/search/?format=json';

// New Key for BBC da012e263b6a4496854c8761881ad062
const key = 'uYna5yjuNZWfbnpioSelm7GbXM0PJjTj68F9B5D7';
let url;

const searchTerm = document.querySelector('.search');
const submitBtn = document.querySelector('.submit');
const section = document.querySelector('section');
const searchForm = document.querySelector('form');

searchForm.addEventListener('submit', fetchResults);

// function submitSearch(e) {
//     e.preventDefault();
//     fetchResults(e);
// }

function fetchResults(e) {
    e.preventDefault()
    url = `${baseURL}&q${searchTerm.value}&sort=n&max=50&offset=0&api_key=${key}`;
    console.log("Url:", url);

    fetch(url)
    .then(results => {
        return results.json();
    })
    .then(json => {
        console.log(json);
    })
}

