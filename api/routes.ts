import {app} from '../app';
import {PREFIX} from './';

app.get(PREFIX + '/search', (req, res) => {
    setTimeout(() => {
        res.send([
            {
                id: 1,
                name: 'Запеченные куринные ножки с соусом тартар',
                description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                image: './images/1.jpg'
            }, {
                id: 2,
                name: 'Запеченные куринные ножки с соусом тартар',
                description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                image: './images/4.jpg'
            }, {
                id: 3,
                name: 'Запеченные куринные ножки с соусом тартар',
                description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                image: './images/3.jpg'
            }, {
                id: 4,
                name: 'Запеченные куринные ножки с соусом тартар',
                description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                image: './images/4.jpg'
            }, {
                id: 5,
                name: 'Запеченные куринные ножки с соусом тартар',
                description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                image: './images/4.jpg'
            }, {
                id: 6,
                name: 'Запеченные куринные ножки с соусом тартар',
                description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                image: './images/4.jpg'
            }
        ]);
    });
});
