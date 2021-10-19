import express from "express";
const router = express.Router();
import { getUsers } from "../controllers/user.controller";

router.get('/users', getUsers);
// router.get('/users/:id',)
// router.post('/users',)
// router.put('/users',)
// router.delete('/users/:id',)

export default router;
