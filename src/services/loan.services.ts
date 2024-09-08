import { ObjectId } from 'mongodb'
import { BOOK_COLLECTION_NAME, LOAN_COLLECTION_NAME } from '~/config/collections'
import { getDB } from '~/config/mongodb'
import { Loan, LoanType } from '~/models/database/loan'

export class loanService {
  async createLoan(loanData: LoanType) {
    // Kiểm tra xem sách có tồn tại không và còn tồn kho không
    const book = await getDB()
      .collection(BOOK_COLLECTION_NAME)
      .findOne({ _id: new ObjectId(loanData.book_id) })
    if (!book || book.quantity <= 0) {
      throw new Error('Sách không còn tồn kho hoặc không tồn tại.')
    }
    const newLoan = new Loan(loanData)
    const result = await getDB().collection(LOAN_COLLECTION_NAME).insertOne(newLoan)
    await getDB()
      .collection(BOOK_COLLECTION_NAME)
      .updateOne(
        { _id: new ObjectId(loanData.book_id) },
        { $inc: { quantity: -1 } } // Giảm số lượng sách đi 1
      )
    return result
  }
  async updateLoan(loanId: string, returned_at: string) {
    const result = await getDB()
      .collection(LOAN_COLLECTION_NAME)
      .updateOne({ _id: new ObjectId(loanId) }, { $set: { returned_at: new Date(returned_at) } })
    return result
  }
}
export const LoanService = new loanService()
