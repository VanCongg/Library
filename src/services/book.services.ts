import { ObjectId } from 'mongodb'
import { BOOK_COLLECTION_NAME } from '~/config/collections'
import { getDB } from '~/config/mongodb'
import { Book, BookType } from '~/models/database/book'
class bookService {
  async createBook(bookData: BookType) {
    const { title, author, quantity } = bookData
    const newBook = new Book(bookData)
    const existingBook = await getDB().collection(BOOK_COLLECTION_NAME).findOne({
      title: title,
      author: author
    })
    if (existingBook) {
      // Nếu sách đã tồn tại, cập nhật quantity
      const updatedBook = await getDB()
        .collection(BOOK_COLLECTION_NAME)
        .findOneAndUpdate(
          { _id: existingBook._id },
          { $inc: { quantity: quantity } }, // Tăng quantity
          { returnDocument: 'after' }
        )
      return updatedBook
    } else {
      // Nếu sách chưa tồn tại, thêm mới
      const result = await getDB().collection(BOOK_COLLECTION_NAME).insertOne(newBook)
      return result
    }
  }
  async getAllBooks() {
    return await getDB().collection(BOOK_COLLECTION_NAME).find().toArray()
  }
  async updateBook(bookId: string, updates: Partial<BookType>) {
    const updatedBook = await getDB()
      .collection(BOOK_COLLECTION_NAME)
      .findOneAndUpdate({ _id: new ObjectId(bookId) }, { $set: updates }, { returnDocument: 'after' })
    return updatedBook
  }
  async deleteBook(bookId: string) {
    const result = await getDB()
      .collection(BOOK_COLLECTION_NAME)
      .deleteOne({ _id: new ObjectId(bookId) })
    return result.deletedCount > 0
  }
  async existsBook(bookId: string) {
    const book = await getDB()
      .collection(BOOK_COLLECTION_NAME)
      .findOne({ _id: new ObjectId(bookId) })
    console.log(book)
    if (!book || book.quantity <= 0) {
      throw new Error('Sách không còn tồn kho hoặc không tồn tại.')
    }
  }
  async addMultipleBooks(booksData: BookType[]) {
    const newBooks = booksData.map((bookData) => new Book(bookData))
    const result = await getDB().collection('books').insertMany(newBooks)
    return result
  }
}
export const BookService = new bookService()
