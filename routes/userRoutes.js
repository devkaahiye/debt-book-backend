import express from "express";
import { deleteUser, getAllUsers, login, register } from "../controllers/userController.js";
import { admin, protect } from "../middleware/authMiddleware.js";


const router = express.Router()


router.route('/').get(protect, getAllUsers).post(protect, register)
router.route('/:id').delete(protect, admin, deleteUser)
router.route('/login').post(login)


export default router