import { ObjectId } from 'mongodb'

// Interface cho giao dịch mượn sách
export interface LoanType {
  _id?: ObjectId
  book_id: ObjectId
  member_id: ObjectId
  borrowed_at?: Date
  due_date: Date
  returned_at?: Date
}

// Class cho giao dịch mượn sách
export class Loan {
  _id?: ObjectId
  book_id: ObjectId
  member_id: ObjectId
  borrowed_at: Date
  due_date: Date
  returned_at?: Date

  constructor({ _id, book_id, member_id, borrowed_at, due_date, returned_at }: LoanType) {
    this._id = _id
    this.book_id = book_id
    this.member_id = member_id
    this.borrowed_at = borrowed_at || new Date()
    this.due_date = due_date
    this.returned_at = returned_at
  }
}
