import { Router } from 'express'
import { createLoanController, updateLoanController } from '~/controllers/loan.controllers'

const router = Router()
router.post('/', createLoanController)
router.put('/:id', updateLoanController)
export default router
