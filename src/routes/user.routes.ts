import express from "express";
const router = express.Router();
import { getUsers, createUser, loginUser } from "../controllers/user.controller";

router.get('/users', getUsers);
router.get('/users/login', loginUser);
// router.get('/users/:id',)
router.post('/users', createUser);
// router.put('/users',)
// router.delete('/users/:id',)

export default router;
