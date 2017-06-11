const ul = document.getElementById('BookContainer');
const url = `https://www.goodreads.com/search.xml?key=8WjJsZqkhRuDWJZvIsCDw&q=${author}`;

const searchAuthor = (authorText) => {
  // const author = document.getElementById('authorTextbox').innerText;
  console.log(authorText);
  console.log('searchAuthor');
};

fetch(url, {
  method: 'get'
}).then((response) => response.json())
.then((data) => {

}).catch((error) => {

});

const addEventListener = () => {
  console.log('addEventListener');
  const getByAuthor = document.getElementById('getByAuthor');
  const authorText = document.getElementById('authorTextbox').value;
  console.log(authorText);
  console.log(getByAuthor);
  getByAuthor.addEventListener('click', searchAuthor(authorText));
};
