import { ObjectId } from 'mongodb'

// Interface cho thành viên
export interface MemberType {
  _id?: ObjectId
  name: string
  email: string
  created_at?: Date
}

// Class cho thành viên
export class Member {
  _id?: ObjectId
  name: string
  email: string
  created_at: Date

  constructor({ _id, name, email, created_at }: MemberType) {
    this._id = _id
    this.name = name
    this.email = email
    this.created_at = created_at || new Date()
  }
}
