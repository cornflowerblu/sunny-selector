import express, { Request, Response } from 'express'
import { v4 as uuidv4 } from 'uuid'

export const guard = express.Router()

guard.post('/login', (req: Request, res: Response) => {
  console.log(req.body)
  res.send({ user: uuidv4(), sessionId: uuidv4() })
})
