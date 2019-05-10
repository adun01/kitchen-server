import {Request, Response} from 'express';

const data = [
    {
        id: 1,
        name: 'Запеченные куринные ножки с соусом тартар',
        url: 'baked-chicken-legs-with-tartar-sauce',
        description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        image: '/images/1.jpg',
        contains: [
            {
                id: 1,
                name: 'Картофель',
                count: 20,
                unitOfMeasure: 'шт',
                iconType: 1,
                contains: {
                    protein: 2,
                    carbohydrates: 16.3,
                    fat: 0.4
                }
            },
            {
                id: 2,
                name: 'Лук репчатый',
                count: 4,
                unitOfMeasure: 'шт',
                image: '/images/onions.jpeg',
                iconType: 2,
                contains: {
                    protein: 1.4,
                    carbohydrates: 8.2,
                    fat: 0.2
                }
            },
            {
                id: 3,
                name: 'Куринные ножки',
                count: 15,
                unitOfMeasure: 'шт',
                image: '/images/chicken-legs.jpeg',
                iconType: 3,
                contains: {
                    protein: 19.4,
                    carbohydrates: 0.2,
                    fat: 14.6
                }
            }, {
                id: 4,
                name: 'Сыр',
                count: 300,
                unitOfMeasure: 'г',
                image: '/images/cheese.jpeg',
                iconType: 4,
                contains: {
                    protein: 23.2,
                    carbohydrates: 2,
                    fat: 29.5
                }
            }, {
                id: 5,
                name: 'Майонез',
                count: 20,
                unitOfMeasure: 'шт',
                image: '/images/mayonnaise.jpeg',
                iconType: 5,
                contains: {
                    protein: 1.8,
                    carbohydrates: 5.11,
                    fat: 49.37
                }
            }, {
                id: 6,
                name: 'Соль',
                image: '/images/salt.jpeg',
                iconType: 6,
                contains: {
                    protein: 0,
                    carbohydrates: 0,
                    fat: 0
                }
            }, {
                id: 7,
                name: 'Специи',
                image: '/images/condiment.jpeg',
                iconType: 7,
                contains: {
                    protein: 0,
                    carbohydrates: 0,
                    fat: 0
                }
            }, {
                id: 8,
                name: 'Зелень',
                image: '/images/greenery.jpeg',
                iconType: 8,
                contains: {
                    protein: 0,
                    carbohydrates: 0,
                    fat: 0
                }
            },
        ],
        steps: [
            {
                id: 1,
                description: `Положите весь творог в кастрюльку и разомните его вилкой так, чтобы в нем не осталось крупных комков. Разбейте в него яйца, всыпьте сахар и тщательно все перемешайте. Лучше не использовать слишком сухой или слишком влажный творог, иначе сырники будут разваливаться в процессе приготовления.`,
                image: '/images/step1.jpg'
            }, {
                id: 2,
                description: `Всыпьте в творог 5 столовых ложек (с горкой) муки и тщательно перемешайте. Можно добавить немного больше муки, сырники получатся тогда более плотными. Или муки можно добавить чуть меньше, и тогда сырники будут нежнее. В итоге у вас должна получиться однородная масса, из которой можно будет лепить сырники. `,
                image: '/images/step2.jpg'
            }, {
                id: 3,
                description: `Поставьте сковороду на средний огонь и налейте в нее подсолнечное масло.`,
                image: '/images/step3.jpg'
            }, {
                id: 4,
                description: `Насыпьте на тарелку немного муки. Слепите несколько небольших шариков из получившейся творожной массы и положите их на тарелку. Лучше лепить разом 4–5 шариков — столько, сколько поместится одновременно на сковороду. Затем по очереди обкатывайте творожные шарики в муке, плющите их в небольшие лепешки (они не должны быть слишком тонкие) и выкладывайте на сковороду.`,
                image: '/images/step4.jpg'
            }, {
                id: 5,
                description: `Обжаривайте сырники 1–2 минуты до появления золотистой корочки. Затем переверните их на другую сторону и также обжарьте до золотистого состояния.`,
                image: '/images/step5.jpg'
            }, {
                id: 6,
                description: `Повторяйте, пока творог не закончится.`,
                image: '/images/step6.jpg'
            }
        ]
    }, {
        id: 2,
        name: 'Запеченные куринные ножки с соусом тартар',
        url: 'baked-chicken-legs-with-tartar-sauce',
        description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        image: '/images/4.jpg',
        contains: [
            {
                id: 1,
                name: 'Картофель',
                count: 20,
                unitOfMeasure: 'шт',
                iconType: 1
            },
            {
                id: 2,
                name: 'Лук репчатый',
                count: 4,
                unitOfMeasure: 'шт',
                image: '/images/onions.jpeg',
                iconType: 2
            },
            {
                id: 3,
                name: 'Куринные ножки',
                count: 15,
                unitOfMeasure: 'шт',
                image: '/images/chicken-legs.jpeg',
                iconType: 3
            }, {
                id: 4,
                name: 'Сыр',
                count: 300,
                unitOfMeasure: 'г',
                image: '/images/cheese.jpeg',
                iconType: 4
            }, {
                id: 5,
                name: 'Майонез',
                count: 20,
                unitOfMeasure: 'шт',
                image: '/images/mayonnaise.jpeg',
                iconType: 5
            }, {
                id: 6,
                name: 'Соль',
                image: '/images/salt.jpeg',
                iconType: 6
            }, {
                id: 7,
                name: 'Специи',
                image: '/images/condiment.jpeg',
                iconType: 7
            }, {
                id: 8,
                name: 'Зелень',
                image: '/images/greenery.jpeg',
                iconType: 8
            },
        ],
        steps: [
            {
                id: 1,
                description: `Нарезать лук полукольцами и замариновать его в майонезе.`,
                image: './images/step1.jpg'
            }, {
                id: 2,
                description: `Нарезать картошку, посолить, замариновать в майонезе.`,
                image: './images/step2.jpg'
            }, {
                id: 3,
                description: `Курицу (не поверите!) тоже замариновать в майонезе! :)\n +
                'Посолить, добавить специи по вкусу.`,
                image: './images/step3.jpg'
            }, {
                id: 4,
                description: `
Через час всё выложить на противень слоями:
1 - картошка;
2 - лук;
3 - мясо.`,
                image: './images/step4.jpg'
            }, {
                id: 5,
                description: `
Поставить в духовку и готовить при температуре 220 градусов 40-50 минут.`,
                image: './images/step5.jpg'
            }, {
                id: 6,
                description: `Затем посыпать тертым сыром и рубленой зеленью. 
Когда сыр расплавится - слоёная картошка готова, можно подавать её на стол.
Приятного аппетита!`,
                image: './images/step6.jpg'
            }
        ]
    }, {
        id: 3,
        name: 'Запеченные куринные ножки с соусом тартар',
        url: 'baked-chicken-legs-with-tartar-sauce',
        description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        image: './images/3.jpg'
    }, {
        id: 4,
        name: 'Запеченные куринные ножки с соусом тартар',
        url: 'baked-chicken-legs-with-tartar-sauce',
        description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        image: './images/4.jpg'
    }, {
        id: 5,
        name: 'Запеченные куринные ножки с соусом тартар',
        url: 'baked-chicken-legs-with-tartar-sauce',
        description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        image: './images/4.jpg'
    }, {
        id: 6,
        name: 'Запеченные куринные ножки с соусом тартар',
        url: 'baked-chicken-legs-with-tartar-sauce',
        description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        image: './images/4.jpg'
    }
];

export const search = (request: Request, response: Response) => {
    setTimeout(() => {
        if (request.params.url) {
            return response.send(data.find(recipe => recipe.url === request.params.url));
        }
        response.send(data.filter(r => r.id !== 1));
    });
};
