import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const validateAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('auth-token')
  if (!token) return res.status(401).json({ error: "You have not permissions"})

  try {
    const verified = jwt.verify(token, 'secret_key')
    next();
  } catch (error) {
    return res.status(400).json({ error: 'Invalid token'})
  }
}