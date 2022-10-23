

import { NextFunction, Response, Request } from 'express';
import Author from '../models/Author';

const readAll = (_req: Request, res: Response, next: NextFunction) => {


    try {
        

        return Author.find()
        .then((pensamientos) => res.status(200).json({ pensamientos }))
        .catch((error) => res.status(500).json({ error }));   

            next()

    } catch (error) {
        return 'error'       
    }
};

export default { readAll }