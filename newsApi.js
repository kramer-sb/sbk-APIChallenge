const baseURL = 'https://newsapi.org/v2/top-headlines?country=us';
const key = 'da012e263b6a4496854c8761881ad062'
let url;

const submitBtn = document.querySelector('.submit');
const section = document.querySelector('section');
const searchForm = document.querySelector('form');

const newsItems = document.querySelector('ul');

searchForm.addEventListener('submit', fetchResults);

function fetchResults(e) {
  e.preventDefault();
  url = `${baseURL}&apiKey=${key}`;
  console.log("Url:", url);

  fetch(url) 
    .then(data => data.json())
    .then(data => { 
      displayResults(data.articles)
    });
  }    
 
function displayResults(json){
  console.log(json[0]);
  while (newsItems.firstChild) {
  newsItems.removeChild(newsItems.firstChild);
  }  for(i = 0; i < json.length; i++){
  let title = json[i].title;
  let listItem = document.createElement('li');
  listItem.innerText = title;
  newsItems.appendChild(listItem);
}
}
