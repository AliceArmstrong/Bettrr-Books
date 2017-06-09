
const ul = document.getElementById('BookContainer');
const url = `https://www.goodreads.com/search.xml?key=8WjJsZqkhRuDWJZvIsCDw&q=${author}`;

const getByAuthor = () => {
  const author = document.getElementById('authorTextbox').innerText;

  console.log(author);
};

fetch(url, {
  method: 'get'
}).then((data) => {

}).catch((error) => {

});

const addEventListener = () => {
  const getByAuthor = document.getElementById('getByAuthor');
  getByAuthor.addEventListener('click', getByAuthor);
};
