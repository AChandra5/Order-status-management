const chefReceivedOrder = () => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Chef received the order and started preparing.")
        resolve()
    }, 2000)
})

const pizzaSauceAdded = () => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Pizza sauce added.")
        resolve()
    }, 10000)
})

const firstLayerOfCheeseAdded = () => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("First layer of cheese added.")
        resolve()
    }, 5000)
})

const toppingsAdded = () => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Topping added.")
        resolve()
    }, 12000)
})

const SecondLayerOfCheeseAdded = () => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Second layer of cheese added.")
        resolve()
    }, 5000)
})

const pizzaBaked = () => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Pizza baked.")
        resolve()
    }, 15000)
})

const OreganoAddedAndPacked = () => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Oregano added and packed.")
        resolve()
    }, 8000)
})

const packageReceivedAtCounter = () => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Package received at the counter.")
        resolve()
    }, 2000)
})

// const executeOrder = () =>{
//     console.log("Order placed.")
//     chefReceivedOrder().then(()=>{
//         return pizzaSauceAdded()
//     }).then(()=>{
//         return firstLayerOfCheeseAdded()
//     }).then(()=>{
//         return toppingsAdded()
//     }).then(()=>{
//         return SecondLayerOfCheeseAdded()
//     }).then(()=>{
//         return pizzaBaked()
//     }).then(()=>{
//         return OreganoAddedAndPacked()
//     }).then(()=>{
//         return packageReceivedAtCounter()
//     }).then(()=>{
//         console.log("Order ready to be handed over to zomato guy.")
//     })
// }

//another way to restructure the above executeOrder function

const executeOrder = ()=>{
    console.log("Order placed.")
    chefReceivedOrder()
    .then(pizzaSauceAdded)
    .then(firstLayerOfCheeseAdded)
    .then(toppingsAdded)
    .then(SecondLayerOfCheeseAdded)
    .then(pizzaBaked)
    .then(OreganoAddedAndPacked)
    .then(packageReceivedAtCounter)
    .then(()=>{
        console.log("Order ready and handed over to zomato guy");
    })




}