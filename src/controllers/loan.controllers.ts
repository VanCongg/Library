import { Request, Response, NextFunction } from 'express'
import { LoanService } from '~/services/loan.services'

export const createLoanController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await LoanService.createLoan(req.body)
    res.status(201).json({ message: 'Loan created successfully', result })
  } catch (error) {
    next(error)
  }
}
export const updateLoanController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const loanId = req.params.id
    const returned_at = req.body
    const result = await LoanService.updateLoan(loanId, returned_at)
    res.status(200).json({ message: 'Loan updated successfully', result })
  } catch (error) {
    next(error)
  }
}
