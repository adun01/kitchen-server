import express = require('express');
const path = require('path');

export const app: express.Application = express();
var resolvedPath = path.resolve('./public/index.html');

import './routes';

app.use(express.static(path.resolve('./public')));

app.get('*', function (req, res) {
    res.sendFile(resolvedPath);
});

const server = app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

declare const module: any;
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.close());
}
