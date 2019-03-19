import express = require('express');

const app: express.Application = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile('/index.html');
});

const server = app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

declare const module: any;
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.close());
}
