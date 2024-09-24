const categories = {
    topAnnouncements: [
        {
            id: 1,
            imageUrl: "https://auto.am/static/offers/3061618/s-72014f642290fcb931a2d3d5f18bef83.jpg",
            title: "Mercedes-Benz GLE 53 AMG Coupe",
            date: 2020,
            price: "$ 89.000"
        },
        {
            id: 2,
            imageUrl: "https://auto.am/static/offers/3072387/s-151b3e5f4d78176ff0d77dae543caaee.jpg",
            title: "Mercedes-Benz G 500",
            date: 2013,
            price: "$ 65.000"
        },
        {
            id: 3,
            imageUrl: "https://auto.am/static/offers/3072227/s-5d6f38278f7ae8960d6f04eea1c4559c.jpg",
            title: "BMW 750",
            date: 2020,
            price: "$ 71.000"
        },
        {
            id: 4,
            imageUrl: "https://auto.am/static/offers/3066760/s-087c3a66adaef13dc9377d4d518207e8.jpg",
            title: "Toyota Camry ",
            date: 2021,
            price: "$ 36.500"
        },
        {
            id: 5,
            imageUrl: "https://auto.am/static/offers/3066761/s-68cc282981c33fe979192995e7d35dba.jpg",
            title: "Kia K7",
            date: 2016,   
            price: "$ 15.700"
        },
        {
            id: 6,
            imageUrl: "https://auto.am/static/offers/3072229/s-c15278b10bc9c788c3a30e719e19d9d1.jpg",
            title: "Ford Escape",
            date: 2019,   
            price: "$ 10.400"
        },
        {
            id: 7,
            imageUrl: "https://auto.am/static/offers/3074162/m-4afea01bbba9a57b3bbb67113be2f52e.jpg",
            title: "Kia Rio",
            date: 2023,   
            price: "$ 15.500"
        },
        {
            id: 8,
            imageUrl: "https://auto.am/static/offers/3068766/s-903bd47c2550cda5f015ed974c70f592.jpg",
            title: "Mercedes-Benz GLE 63 S Coupe",
            date: 2021,   
            price: "$ 128.000"
        },
        {
            id: 9,
            imageUrl: "https://auto.am/static/offers/3072178/s-17c19ebb02ffab80e06999f9b64d6e83.jpg",
            title: "Hyundai Tucson",
            date: 2017,   
            price: "$ 14.000"
        },
        {
            id: 10,
            imageUrl: "https://auto.am/static/offers/3072155/s-1467d1d84bbd7f05c9b5bf624f5d9009.jpg",
            title: "BMW X6 M",
            date: 2020,   
            price: "$ 109.000"
        },
        {
            id: 11,
            imageUrl: "https://auto.am/static/offers/3065726/s-2ae59e9cd85a35d5eae9f796543c9e4d.jpg",
            title: "Honda Accord",
            date: 2019,   
            price: "$ 24.500"
        },
        {
            id: 12,
            imageUrl: "https://auto.am/static/offers/3072189/s-3973921bf53a55549a1a6ab404bab6d0.jpg",
            title: "Toyota Land Cruiser 200",
            date: 2019,   
            price: "$ 68.000"
        },
    ],
    urgentSale: [
        {
            id: 13,
            imageUrl: "https://auto.am/static/offers/3056233/s-2110a79d37343d9d56807bfbba51ba28.jpg",
            title: "Porsche Taycan ",
            date: 2022,
            price: "$ 72.000",
        },
        {
            id: 14,
            imageUrl: "https://auto.am/static/offers/3070419/s-bfcd44873eb58c3cdcc809c76c405521.jpg",
            title: "Mercedes-Benz E 200 ",
            date: 2012,
            price: "$ 16.400",
        },
        {
            id: 15,
            imageUrl: "https://auto.am/static/offers/3069863/s-31aa1eb8130fa1ffeab16217c2be7e0c.jpg",
            title: "Toyota Corolla",
            date: 2020,
            price: "$ 19.000",
        },
        {
            id: 16,
            imageUrl: "https://auto.am/static/offers/3071026/s-508f08f30c85c59008c47dfcb2432402.jpg",
            title: "Chevrolet Volt",
            date: 2013,
            price: "$ 8.500",
        },
        {
            id: 17,
            imageUrl: "https://auto.am/static/offers/3071752/s-a9e1bf29e2ffd82f2e3fd8c903d8d8d2.jpg",
            title: "BMW iX",
            date: 2022,
            price: "$ 60.000",
        },
        {
            id: 18,
            imageUrl: "https://auto.am/static/offers/3071746/s-716f889b57c2b199a8d21522c456d6d5.jpg",
            title: "Kia K5",
            date: 2022,
            price: "$ 24.000",
        },
        {
            id: 19,
            imageUrl: "https://auto.am/static/offers/3065523/s-23708f18008d1b5482358e563c802d5b.jpg",
            title: "Mercedes-Benz E 200",
            date: 2014,
            price: "$ 15.900",
        },
        {
            id: 20,
            imageUrl: "https://auto.am/static/offers/3001695/s-b7dd0fa06983dfa59dd0c85be75d029d.jpg",
            title: "Land Rover Range Rover Sport",
            date: 2010,
            price: "$ 17.500",
        },
        {
            id: 21,
            imageUrl: "https://auto.am/static/offers/3070674/s-d4034cecfe30e50d7865aa545c37d054.jpg",
            title: "Tesla Model 3",
            date: 2021,
            price: "$ 28.000",
        },
        {
            id: 22,
            imageUrl: "https://auto.am/static/offers/3063467/s-bbe5b1fd8a781eff2091a4a6eb2638e9.jpg",
            title: "BMW 530",
            date: 2021,
            price: "$ 41.800",
        },
        {
            id: 23,
            imageUrl: "https://auto.am/static/offers/3071691/s-06ecbf375f757c3e91ecd0378ef07708.jpg",
            title: "Jeep Wrangler",
            date: 2018,
            price: "$ 55.000",
        },
        {
            id: 24,
            imageUrl: "https://auto.am/static/offers/3061668/m-e321dd65496a7714e7b6966dbac7b5d7.jpg",
            title: "Volkswagen iD.6",
            date: 2022,
            price: "$ 27.500",
        },
    ],
    offersFromDealers: [
        {
            id: 25,
            imageUrl: "https://auto.am/static/offers/3031137/s-72ff51f5a5242d8f7dbd55226fad95f7.jpg",
            title: "Mercedes-Benz G 63 AMG",
            date: 2024,
            price: "219.000"
        },
        {
            id: 26,
            imageUrl: "https://auto.am/static/offers/3031130/s-fc0b7c39b6c748043be292ca51ee28d6.jpg",
            title: "Mercedes-Benz G 63 AMG ",
            date: 2023,
            price: "195.000"
        },
        {
            id: 27,
            imageUrl: "https://auto.am/static/offers/3033343/s-57a20bac54ac9a3b57786dfa0ff03add.jpg",
            title: "Porsche Cayenne",
            date: 2023,
            price: "113.900"
        },
        {
            id: 28,
            imageUrl: "https://auto.am/static/offers/3033501/s-9bb10ac2b1ac6117a73ac7f7185fb422.jpg",
            title: "BMW XM",
            date: 2023,
            price: "137.000"
        },
        {
            id: 29,
            imageUrl: "https://auto.am/static/offers/3032594/s-8ad5b4b7282ab531250c1de669512d84.jpg",
            title: "Ford F150",
            date: 2022,
            price: "98.000"
        },
        {
            id: 30,
            imageUrl: "https://auto.am/static/offers/3028796/s-f5df36a7e0bc920d1bb3f3c6c2f764ff.jpg",
            title: "Mercedes-Benz S 500",
            date: 2022,
            price: "180.000"
        },
        {
            id: 31,
            imageUrl: "https://auto.am/static/offers/3022469/s-d27bb5f40bdb8891828637107b7bc294.jpg",
            title: "Land Rover Range Rover Sport",
            date: 2023,
            price: "259.000"
        },
        {
            id: 32,
            imageUrl: "https://auto.am/static/offers/3022481/s-4f9b300dec1f12f645fb39ecdadde02c.jpg",
            title: "Land Rover Range Rover Sport",
            date: 2023,
            price: "161.000"
        },
        {
            id: 33,
            imageUrl: "https://auto.am/static/offers/3022479/s-b228982dba376868170d6304d3e09f2b.jpg",
            title: "Land Rover Range Rover Sport",
            date: 2023,
            price: "182.000"
        },
        {
            id: 34,
            imageUrl: "https://auto.am/static/offers/3028780/s-f52c8f6986ffcbdd863e672e38f6041e.jpg",
            title: "Mercedes-Benz E 63 AMG",
            date: 2022,
            price: "150.000"
        },
        {
            id: 35,
            imageUrl: "https://auto.am/static/offers/3016524/s-8253182d6eb7072e9fe83bfb16e328ec.jpg",
            title: "Mercedes-Benz S 580",
            date: 2023,
            price: "235.000"
        },
        {
            id: 36,
            imageUrl: "https://auto.am/static/offers/3016583/m-372af03dbc0ca136761d93989299907d.jpg",
            title: "Ferrari Purosangue",
            date: 2023,
            price: "895.000"
        }
    ]
}

export default categories;