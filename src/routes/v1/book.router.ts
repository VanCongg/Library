import { Router } from 'express'
import {
  addMultipleBooksController,
  createBookController,
  deleteBookController,
  getAllBookController,
  updateBookController
} from '~/controllers/book.controllers'
const router = Router()

router.post('/', createBookController)
router.get('/', getAllBookController)
router.patch('/:id', updateBookController)
router.delete('/:id', deleteBookController)
router.post('/addmultiple', addMultipleBooksController)
export default router
