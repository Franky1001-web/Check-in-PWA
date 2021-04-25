const dishes = [
    {categoryName: "Recommended",
     id: "#Recommended",
      data: [
        {
            "pk": 85,
            "name": "Fried Rice",
            "type": "RECOMMENDED",
            "types": [
                "Veg",
                "Egg",
                "Paneer"
            ],
            "costs": [
                "99.00",
                "119.00",
                "119.00"
            ],
            "tags": [],
            "available_meals": [
                "brkfst",
                "lunch",
                "dinner",
                "nhtlfe"
            ],
            "image": "",
            "description": "Have a tasty Fried Rice (egg or paneer)",
            "ingredients": [],
            "is_available": false,
            "customizations": [],
            "item_type": 0,
            "group": 16,
            "created": "2019-06-24T12:08:56.801840Z",
            "modified": "2020-11-06T14:27:20.370306Z",
            "menus": [
                2
            ],
            mealtype: 'nonveg',
            cartValue: 0,
            id: 85,
            variants: [
                {
                    name: "Veg",
                    price: 125.00,
                    type: "veg",
                    variantId: 1,
                    id: 85
                },
                {
                    name: "Egg",
                    price: 125.00,
                    type: "nonveg",
                    variantId: 2,
                    id: 85
                },
                {
                    name: "Paneer",
                    price: 100.00,
                    type: "veg",
                    variantId: 3,
                    id: 85
                },
            ],
            price: 300.00,
            isCustomised: true,
        },
        {
            mealtype: 'nonveg',
            type: 'MUSTTRY',
            name: 'Haka noodle',
            price: 375.00,
            discreption: '',
            image: '',
            isCustomised: true,
            cartValue: 0,
            id: "hakanoodle",
            variants: [
                {
                    name: "Extra Veggie",
                    price: 123.00,
                    type: "veg",
                    variantId: "extraveggie",
                    id: "hakanoodle"
                },
                {
                    name: "Extra Cheese",
                    price: 110.00,
                    type: "veg",
                    variantId: "extracheese",
                    id: "hakanoodle"
                }
            ]
        },
        {
            mealtype: 'veg',
            type: 'RECOMMENDED',
            name: 'Burger with Fries',
            price: 375.00,
            discreption: 'Lettuce, totmato, caramelized onion, veggie, cheddar cheese.',
            image: 'https://hips.hearstapps.com/hmg-prod/images/190416-chicken-burger-082-1556204252.jpg',
            isCustomised: false,
            cartValue: 0,
            id: "burgerwithfries"
        },
        {
            mealtype: 'veg',
            type: 'MUSTTRY',
            name: 'Pizza',
            price: 180.98,
            discreption: '',
            image: '',
            isCustomised: false,
            cartValue: 0,
            id: "pizza"
        },
    ]      },
    {
        categoryName: "Beverages",
        id: "#Beverages",
        data: [
            {
                "pk": 85,
                "name": "Coke",
                "type": "RECOMMENDED",
                "types": [
                    "Veg",
                    "Egg",
                    "Paneer"
                ],
                "costs": [
                    "99.00",
                    "119.00",
                    "119.00"
                ],
                "tags": [],
                "available_meals": [
                    "brkfst",
                    "lunch",
                    "dinner",
                    "nhtlfe"
                ],
                "image": "",
                "description": "Have a tasty Fried Rice (egg or paneer)",
                "ingredients": [],
                "is_available": false,
                "customizations": [],
                "item_type": 0,
                "group": 16,
                "created": "2019-06-24T12:08:56.801840Z",
                "modified": "2020-11-06T14:27:20.370306Z",
                "menus": [
                    2
                ],
                mealtype: 'veg',
                cartValue: 0,
                id: 85,
                variants: [
                    
                ],
                price: 85.00,
                isCustomised: false,
            },
            {
                mealtype: 'veg',
                type: 'MUSTTRY',
                name: 'Sprite',
                price: 75.00,
                discreption: '',
                image: '',
                isCustomised: false,
                cartValue: 0,
                id: "hakanoodle",
                variants: [
                   
                ]
            },
            {
                mealtype: 'veg',
                type: 'RECOMMENDED',
                name: 'Juices',
                price: 175.00,
                discreption: 'Lettuce, totmato, caramelized onion, veggie, cheddar cheese.',
                image: 'https://hips.hearstapps.com/hmg-prod/images/190416-chicken-burger-082-1556204252.jpg',
                isCustomised: true,
                variants: [
                    {
                        name: "Orange",
                        price: 123.00,
                        type: "veg",
                        variantId: "orangejuice",
                        id: "orangej"
                    }
                ],
                cartValue: 0,
                id: "JUICE"
            },
            {
                mealtype: 'veg',
                type: 'MUSTTRY',
                name: 'Appy',
                price: 180.98,
                discreption: '',
                image: '',
                isCustomised: false,
                cartValue: 0,
                id: "applejuice"
            },
        ]
    }
];

export default dishes