
const axios = require('axios');

const BASE_URL = 'http://localhost:5000';

// Task 11: Retrieve all books using async/await
async function getAllBooks() {
  try {
    const response = await axios.get(BASE_URL + '/');
    console.log(response.data);
  } catch (error) {
    console.error('Error retrieving books:', error.message);
  }
}

// Task 12: Retrieve a book by ISBN using a Promise
function getBooksByISBN(isbn) {
  return axios.get(`${BASE_URL}/isbn/${encodeURIComponent(isbn)}`)
    .then(response => console.log(response.data))
    .catch(error => console.error('Error:', error.message));
}

// Task 13: Retrieve books by author using async/await
async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(
      `${BASE_URL}/author/${encodeURIComponent(author)}`
    );
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Task 14: Retrieve books by title using async/await
async function getBooksByTitle(title) {
  try {
    const response = await axios.get(
      `${BASE_URL}/title/${encodeURIComponent(title)}`
    );
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Run a method from the command line
async function main() {
  const [task, ...args] = process.argv.slice(2);

  switch (task) {
    case 'all':
      await getAllBooks();
      break;
    case 'isbn':
      await getBooksByISBN(args[0]);
      break;
    case 'author':
      await getBooksByAuthor(args.join(' '));
      break;
    case 'title':
      await getBooksByTitle(args.join(' '));
      break;
    default:
      console.log(
        'Usage: node general.js all | isbn <ISBN> | author <name> | title <title>'
      );
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  getAllBooks,
  getBooksByISBN,
  getBooksByAuthor,
  getBooksByTitle
};
