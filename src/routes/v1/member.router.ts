import { Router } from 'express'
import {
  addMemberController,
  deleteMemberController,
  getAllMembersController,
  getMemberByIdController,
  updatedMemberController
} from '~/controllers/member.controllers'
const router = Router()

router.post('/', addMemberController)
router.get('/', getAllMembersController)
router.get('/:id', getMemberByIdController)
router.patch('/:id', updatedMemberController)
router.delete('/:id', deleteMemberController)
export default router
