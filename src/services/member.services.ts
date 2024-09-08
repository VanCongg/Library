import { ObjectId } from 'mongodb'
import { MEMBER_COLLECTION_NAME } from '~/config/collections'
import { getDB } from '~/config/mongodb'
import { Member, MemberType } from '~/models/database/member'

class memberService {
  async getAllMembers() {
    const db = getDB()
    const members = await db.collection(MEMBER_COLLECTION_NAME).find().toArray()
    return members
  }
  async getMemberById(id: string) {
    const member = await getDB()
      .collection(MEMBER_COLLECTION_NAME)
      .findOne({ _id: new ObjectId(id) })
    if (!member) {
      throw new Error('Member not found')
    }
    return member
  }
  async addMember(memberData: MemberType) {
    const { email } = memberData
    const existingMember = await getDB().collection(MEMBER_COLLECTION_NAME).findOne({ email })
    if (existingMember) {
      throw new Error('Member already exists')
    }
    const result = await getDB().collection(MEMBER_COLLECTION_NAME).insertOne(new Member(memberData))
    return result.insertedId
  }
  async updateMember(id: string, memberData: MemberType) {
    const updatedMember = await getDB()
      .collection(MEMBER_COLLECTION_NAME)
      .findOneAndUpdate({ _id: new ObjectId(id) }, { $set: memberData }, { returnDocument: 'after' })
    return updatedMember
  }
  async deleteMember(id: string) {
    const result = await getDB()
      .collection(MEMBER_COLLECTION_NAME)
      .deleteOne({ _id: new ObjectId(id) })
    return result.deletedCount > 0
  }
}
export const MemberService = new memberService()
