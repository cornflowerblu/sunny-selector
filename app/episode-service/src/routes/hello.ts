import express, { Request, Response } from 'express'

export const hello = express.Router()

hello.get('/hello', (req: Request, res: Response) => {
  res.send('Hello World!').status(200)
})
