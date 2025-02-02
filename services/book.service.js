import { loadFromStorage, saveToStorage, makeId } from "./util.service.js"
import { storageService } from "./async-storage.service.js"

const BOOK_KEY = 'bookDB'
_createBooks()

export const bookService = {
  query,
  get,
  remove,
  save,
  getEmptyBook,
  getDefaultFilter,
}

function query(filterBy = {}) {
  return storageService.query(BOOK_KEY)
    .then(books => {
      if (filterBy.title) {
        const regExp = new RegExp(filterBy.title, 'i')
        books = books.filter(book => regExp.test(book.title))
      }
      return books
    })
}

function get(bookId) {
  return storageService.get(BOOK_KEY, bookId)
}

function remove(bookId) {
  return storageService.remove(BOOK_KEY, bookId)
}

function save(book) {
  if (book.id) {
    return storageService.put(BOOK_KEY, book)
  } else {
    return storageService.post(BOOK_KEY, book)
  }
}

function getEmptyBook(title = '', listPrice = '') {
  return { title, listPrice }
}

function getDefaultFilter() {
  return { title: '', listPrice: '' }
}

function _createBooks() {
  let books = loadFromStorage(BOOK_KEY)
  if (!books || !books.length) {
    books = [
      _createBook('Narnia', 300),
      _createBook('Harry Potter', 120),
      _createBook('Wimpy Kid', 50),
    ]
    saveToStorage(BOOK_KEY, books)
  }
}

function _createBook(title, listPrice = 250) {
  const book = getEmptyBook(title, listPrice)
  book.id = makeId()
  return book
}