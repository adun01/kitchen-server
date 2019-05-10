import {Request, Response} from 'express';

import {app} from '../app';
import {PREFIX} from '../api';
import {search} from '../api/search';

app.route(PREFIX + '/search')
    .get((request: Request, response: Response) => search(request, response));

app.route(PREFIX + '/recipes/:url')
    .get((request: Request, response: Response) => search(request, response));
