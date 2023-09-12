// Imports happen at the top
const data = require('./data.json')


// For Of Loops

const flavors = ['vanilla', 'chocolate', 'strawberry']

// Regular for loop, iterating over an array
// for(let i = 0; i < flavors.length; i++){
//     console.log(flavors[i])
// }



// For Of Loop - used for iterating over arrays
// for (let flavor of flavors) {
//     console.log(flavor)
// }


// console.log(data[0])

// Looping over an array of objects
// Printing out an array of each character's superpowers
// for(let char of data){
//     console.log(char.superpowers)
// }



// NESTED LOOPS: iterating over an array that is a value for a key inside of each object
// Outer for loop iterates over the data, where `char` represents each individual spiderman object
// for(let char of data){
//     // char.superpowers will give us an array of strings representing each superpower
//     // console.log(char.superpowers)
//     // We can iterate over the array of superpowers by using char.superpowers
//     for(let power of char.superpowers){
//         console.log(power)
//     }
// }




const customers = [
    {
        name: 'Carlos',
        favStore: 23,
        transactions: [
            {
                id: 124091214,
                cashier: 'Monica',
                products: ['queso', 'steak bowl', 'guac']
            },
            {
                id: 12424532523543,
                cashier: 'Reb',
                products: ['water', 'chips', 'guac']
            }
        ]
    },
    {
        name: 'Sadie',
        favStore: 25,
        transactions: [
            {
                id: 124091212324,
                cashier: 'Reb',
                products: ['chicken & steak bowl', 'guac', 'chips', 'sour cream']
            }
        ]
    },
]

// Iterate over the customers array, where 'customer' represents each customer object
for(let customer of customers){
    // console.log(customer)
    // console.log(customer.transactions)
    // Iterate over customer.transactions which is an array of objects representing each visit to chipotle
    for(let transaction of customer.transactions){
        // Print out each transaction which is an object
        // console.log(transaction)
        // console.log(transaction.products)
        for(let product of transaction.products){
            console.log(product)
        }
    }
}