import express from "express";
import { createNewBorrower, deleteBorrower, getAllBorrowers, updateBorrower } from "../controllers/borrowersController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

const router = express.Router()

router.route("/").get(protect, getAllBorrowers).post(protect, createNewBorrower)
router.route('/:id').put(protect, updateBorrower).delete(protect, admin,deleteBorrower)

export default router