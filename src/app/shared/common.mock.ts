export const itemsListing: any[] = [
    {
        id: 0,
        name: 'Apple Iphone 11',
        img: 'https://barkham03.github.io/ProjectAngular/assets/images/iphone',
        rent: ((50000 + 0.08 - 0.15 + 0.13) / 18).toFixed(0),
        months: 18,
        price: 50000
    },
    {
        id: 1,
        name: 'One Plus',
        img: 'https://barkham03.github.io/ProjectAngular/assets/images/OnePlus',
        rent: ((40000 + 0.08 - 0.15 + 0.13) / 18).toFixed(0),
        months: 18,
        price: 40000
    },
    {
        id: 2,
        name: 'Apple Iphone 12',
        img: 'https://barkham03.github.io/ProjectAngular/assets/images/iphone12',
        rent: ((100000 + 0.08 - 0.15 + 0.13) / 18).toFixed(0),
        months: 18,
        price: 60000
    },
]

export const topBrands: any [] = [
    {
        id: 0,
        name: 'Apple',
        img: 'https://barkham03.github.io/ProjectAngular/assets/images/iphonebrand'
    },
    {
        id: 1,
        name: 'Oppo',
        img: 'https://barkham03.github.io/ProjectAngular/assets/images/oppoBrand'
    },
    {
        id: 2,
        name: 'Vivo',
        img: 'https://barkham03.github.io/ProjectAngular/assets/images/vivoBrand'
    },
    {
        id: 0,
        name: 'Apple',
        img: 'https://barkham03.github.io/ProjectAngular/assets/images/iphonebrand'
    },
    {
        id: 1,
        name: 'Oppo',
        img: 'https://barkham03.github.io/ProjectAngular/assets/images/oppoBrand'
    },

]

export const detailItem: any[] = [
    {
        id: 0,
        img: 'https://barkham03.github.io/ProjectAngular/assets/images/OnePlus',
        productDetails: 'The OnePlus 6T is built with Qualcomm Snapdragon 845 processor for a fast and smooth performance. It comes with a stunning 6.41-inch optic AMOLED display, which enhances the viewing experience. The dual camera with optical image stabilisation, studio lighting and nightscape features let you click better pictures even in low light',
        dimensions: '2.94"W x 6.2"H x 0.32"D',
        features: [
            { spec: 'Capacity/Size : 6.41' },
            { spec: 'RAM: 6GB, ROM: 128GB' },
            { spec: 'Dual rear camera: 16MP+20MP' },
            { spec: 'Dual SIM' },
            { spec: 'Facial & fingerprint security' },
            { spec: 'Comes with charger and USB cable' }
        ],
        safety: [
            { measures: 'Avoid touching the screen with dirty/ oily hands' },
            { measures: 'Use a sturdy phone cover to keep it safe'},
            { measures: 'Keep your phone locked to protect your data' },
        ],
        boxInclude: [
            {name: 'Handset' , svg: 'assets/images/smartphone-call.svg'},
            {name: 'Adapter', svg: 'assets/images/charger.svg'},
            {name: 'Screen Proctector', svg: 'assets/images/mobile.svg'},
            {name: 'Sim Tray Ejector', svg: 'assets/images/navigation.svg'},
            {name: 'Backcover', svg: 'assets/images/phone-case.svg'},
            {name: 'USB Cable', svg: 'assets/images/cable.svg'},
        ]
    }
]