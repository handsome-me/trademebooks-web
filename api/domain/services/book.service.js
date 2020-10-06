const bookRepository = require('../repositories/book.repository');
const ApiException = require('../../utils/ApiException');
const mongoose = require('mongoose');

// Retrieve - all books
const getAllBooks = async (searchQuery, limit) => {
  limit = limit || 10;
  const books = bookRepository.getAll(searchQuery, limit);
  return books;
};

// Retrieve - one
const getBookById = async (bookId) => {
  if (!mongoose.Types.ObjectId.isValid(bookId)) {
    // the id is invalid
    throw new ApiException(
      (message = `the book with that id: ${bookId} does not exist.`),
      (status = 'failed'),
      (code = 401),
      (data = null),
      (errors = [`the book with that id: ${bookId} does not exist.`])
    );
  }

  let book = await bookRepository.getById(bookId);

  // console.log('book', book);

  if (!book) {
    throw new ApiException(
      (message = `the book with that id: ${bookId} does not exist.`),
      (status = 'failed'),
      (code = 401),
      (data = null),
      (errors = [`the book with that id: ${bookId} does not exist.`])
    );
  }

  return book;
};

// Create a book
const createBook = async (book) => {
  return bookRepository.create(book);
};

// Update a book
const updateBookById = async (bookId, book) => {
  return bookRepository.updateById(bookId, book);
};

// Delete a book
const deleteBookById = async (bookId) => {
  return bookRepository.deleteById(bookId);
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBookById,
  deleteBookById,
};
