import express from "express";
const router = express.Router();
import { getUsers, createUser, loginUser } from "../controllers/user.controller";
import { validateAuth } from "../middlewares/autentication"

router.get('/users', validateAuth, getUsers);
router.get('/users/login', loginUser);
// router.get('/users/:id',)
router.post('/users', createUser);
// router.put('/users',)
// router.delete('/users/:id',)

export default router;
