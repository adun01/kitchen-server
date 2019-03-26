import express = require('express');

export const app: express.Application = express();

import './api/routes';

app.use(express.static('public'));

var path = require('path');
var filePath = "./public/index.html"
var resolvedPath = path.resolve(filePath);
console.log(resolvedPath);

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
