import { ObjectId } from 'mongodb'

// Interface cho sách
export interface BookType {
  _id?: ObjectId
  title: string
  author: string
  quantity: number
  created_at?: Date
}

// Class cho sách
export class Book {
  _id?: ObjectId
  title: string
  author: string
  quantity: number
  created_at: Date

  constructor({ _id, title, author, quantity, created_at }: BookType) {
    this._id = _id
    this.title = title
    this.author = author
    this.quantity = quantity
    this.created_at = created_at || new Date()
  }
}
