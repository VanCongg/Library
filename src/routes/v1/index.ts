import { Router } from 'express'
import booksRouter from './book.router'
import membersRouter from './member.router'
import loansRouter from './loan.router'
const router = Router()

router.get('/', (req, res) => {
  res.status(200).json({ message: 'hello word' })
})
router.use('/books', booksRouter)
router.use('/members', membersRouter)
router.use('/loans', loansRouter)
export default router
