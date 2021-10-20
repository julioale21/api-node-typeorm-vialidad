import { Request, Response } from "express";
import { getRepository } from "typeorm";
import bcrypt from "bcrypt";
import { User } from "../entity/User";

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
  const users = await getRepository(User).find();
  return res.json(users)
}

export const createUser = async (req: Request, res: Response): Promise<Response> => {
  let user = req.body
  user.password = bcrypt.hashSync(req.body.password, 10)
  const newUser = getRepository(User).create(user)
  const createdUser = await getRepository(User).save(newUser);
  return res.json(createdUser);
}