import { Request, Response, NextFunction } from 'express'
import { BookService } from '~/services/book.services'

export const createBookController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BookService.createBook(req.body)
    res.status(201).json({ messaage: 'Book created successfully', result })
  } catch (error) {
    next(error)
  }
}
export const getAllBookController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BookService.getAllBooks()
    res.status(201).json({ messaage: 'get all book successfully', result })
  } catch (error) {
    next(error)
  }
}

export const updateBookController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BookService.updateBook(req.params.id, req.body)
    res.status(201).json({ messaage: 'update book successfully', result })
  } catch (error) {
    next(error)
  }
}
export const deleteBookController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bookId = req.params.id
    const result = await BookService.deleteBook(bookId)
    res.status(201).json({ messaage: 'delete book successfully', result })
  } catch (error) {
    next(error)
  }
}
export const addMultipleBooksController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const booksData = req.body
    if (!Array.isArray(booksData) || booksData.length === 0) {
      return res.status(400).json({ message: 'Invalid books data' })
    }
    const result = await BookService.addMultipleBooks(booksData)
    res.status(201).json({ message: 'Books added successfully', result })
  } catch (error) {
    next(error)
  }
}
