import { NextFunction, Request, Response } from 'express'

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const status = err.status || 500
  const message = err.message || 'Internal Server Error'
  res.status(status).json({ status: 'error', message })
}

export default errorHandler
