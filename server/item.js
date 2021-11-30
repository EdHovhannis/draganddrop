import bcrypt from 'bcryptjs'

export const item = {
    users: [
        {
            name: "Edgar",
            email: "edocrach32@gmail.com",
            password: bcrypt.hashSync("11111111Ed", 8),
            isAdmin: true
        },
        {
            name: "John",
            email: "example@gmail.com",
            password: bcrypt.hashSync("22222222Jo", 8),
            isAdmin: false
        },
        {
            name: "Doe",
            email: "doe@gmail.com",
            password: bcrypt.hashSync("22222222Do", 8),
            isAdmin: false
        },
        {
            name: "Jane",
            email: "jane@gmail.com",
            password: bcrypt.hashSync("22222222Ja", 8),
            isAdmin: false
        }
    ],
    products: [
        {
         
            name: "Nike",
            category: "Sport wear",
            image: "https://amazona.webacademy.pro/images/p1.jpg",
            price: 120,
            brand: "Nike",
            rating: 4.5,
            review: 10,
            countInStock: 1,
            description: "sport high quality product"
        },
        {
          
            name: "Puma",
            category: "Sport wear",
            image: "https://amazona.webacademy.pro/images/p2.jpg",
            price: 120,
            brand: "Puma",
            rating: 4.5,
            review: 11,
            countInStock: 5,
            description: "sport high quality product"
        },
        {
           
            name: "Joma",
            category: "Sport wear",
            image: "https://amazona.webacademy.pro/images/p3.jpg",
            price: 120,
            brand: "Joma",
            rating: 4,
            review: 9,
            countInStock: 3,
            description: "sport high quality product"
        },
        {
            
            name: "Hummel",
            category: "Sport wear",
            image: "https://amazona.webacademy.pro/images/p4.jpg",
            price: 130,
            brand: "Hummel",
            rating: 4.5,
            review: 13,
            countInStock: 4,
            description: "sport high quality product"
        },
        {
           
            name: "Reebok",
            category: "Sport wear",
            image: "https://amazona.webacademy.pro/images/p5.jpg",
            price: 120,
            brand: "Reebok",
            rating: 3.5,
            review: 10,
            countInStock: 5,
            description: "sport high quality product"
        },
        {
            
            name: "Demix",
            category: "Sport wear",
            image: "https://amazona.webacademy.pro/images/p6.jpg",
            price: 110,
            brand: "Nike",
            rating: 3,
            review: 15,
            countInStock: 0,
            description: "sport high quality product"
        }
    ]
}