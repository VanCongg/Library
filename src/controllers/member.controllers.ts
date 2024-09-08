import { Request, Response, NextFunction } from 'express'
import { MemberService } from '~/services/member.services'
export const addMemberController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await MemberService.addMember(req.body)
    res.status(201).json({ messaage: 'Member created successfully', result })
  } catch (error) {
    next(error)
  }
}
export const getAllMembersController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await MemberService.getAllMembers()
    res.status(200).json({ messaage: 'All members', result })
  } catch (error) {
    next(error)
  }
}
export const getMemberByIdController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const memberId = req.params.id
    const result = await MemberService.getMemberById(memberId)
    res.status(200).json({ messaage: 'members', result })
  } catch (error) {
    next(error)
  }
}
export const updatedMemberController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const memberId = req.params.id
    const result = await MemberService.updateMember(memberId, req.body)
    res.status(200).json({ messaage: 'Member updated successfully', result })
  } catch (error) {
    next(error)
  }
}
export const deleteMemberController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const memberId = req.params.id
    const result = await MemberService.deleteMember(memberId)
    res.status(200).json({ messaage: 'Member deleted successfully', result })
  } catch (error) {
    next(error)
  }
}
