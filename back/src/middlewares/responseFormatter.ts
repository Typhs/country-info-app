// responseFormatter.ts
import { Request, Response, NextFunction } from 'express'

interface ResponseWithCustomMethods extends Response {
  success: (data: any) => void
  error: (data: any) => void
}

const responseFormatter = (req: Request, res: Response, next: NextFunction) => {
  const originalJson = res.json
  res.json = function (data: any) {
    const formattedResponse = {
      status: res.statusCode === 200 ? 'success' : 'error',
      data: data,
    }
    return originalJson.call(this, formattedResponse)
  }

  next()
}

export default responseFormatter
