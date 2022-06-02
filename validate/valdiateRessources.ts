import { AnyZodObject } from 'zod';
import { Request, Response, NextFunction } from 'express';

const validate = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.query
        })
    }
    catch(error:any) {
        return res.status(400).send(error.error)
    }
}
export default validate;