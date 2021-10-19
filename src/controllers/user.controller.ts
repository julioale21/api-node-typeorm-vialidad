import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
  const users = await getRepository(User).find();
  return res.json(users)
}

export const createUser = async (req: Request, res: Response): Promise<Response> => {
  const user = req.body
  const newUser = getRepository(User).create(user)
  const createdUser = await getRepository(User).save(newUser);
  return res.json(createdUser);
}