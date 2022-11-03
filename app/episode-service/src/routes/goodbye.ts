import express, { Request, Response } from 'express'

export const bye = express.Router()

bye.get('/goodbye', (req: Request, res: Response) => {
  res.send('Goodbye World!').status(200)
})
