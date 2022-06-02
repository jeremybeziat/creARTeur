import { Express } from 'express';
import {Request, Response } from 'express'
  
  export function openRoutes(app: Express){
app.get('/healthcheck', (req: Request, res: Response) => {
    res.status(200).send({'message': '✅'})
})
  }