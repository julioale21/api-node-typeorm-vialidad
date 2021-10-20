import { Request, Response } from "express";
import { getRepository } from "typeorm";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import { User } from "../entity/User";

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
  const users = await getRepository(User).find({ select: ["id", "name", "email"]});
  return res.json(users)
}

export const createUser = async (req: Request, res: Response): Promise<Response> => {
  let user = req.body
  user.password = bcrypt.hashSync(req.body.password, 10)
  const newUser = getRepository(User).create(user)
  const createdUser = await getRepository(User).save(newUser);
  return res.json(createdUser);
}

export const loginUser = async (req: Request, res: Response) : Promise<any> => {
  const user = await getRepository(User).findOne({ email: req.body.email })

  if (!user) {
    return res.status(404).send({ message: "User not found"})
  }

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  
  if (!validPassword) {
    return res.status(400).json({ error: 'invalid password' })
  }

  const token = Jwt.sign({
    id: user.id,
    email: user.email
  }, "secret_key")

  return res.status(200).send({ access_token: token })
}