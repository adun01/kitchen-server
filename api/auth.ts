import {Request, Response} from 'express';

export const auth = (request: Request, response: Response) => {
    response.send({
        id: 1,
        name: 'alexey',
        surName: 'ubaev'
    });
};
