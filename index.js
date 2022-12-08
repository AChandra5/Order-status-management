let orderStatusBlocks = document.getElementsByClassName("order-status-block");
const executeOrder = () => {
  let orderId = document.getElementById("order-id-input-text").value;
  document.getElementById("order-id-input-text").value = "";
  document.getElementById(
    "order-id-display"
  ).innerHTML = `Status for order ID: <b>${orderId}</b>`;
  document.getElementById("order-id-display").style.display = "block";

  // console.log(orderStatusBlocks[0].classList.replace('btn-light', 'btn-success'))

  console.log("Order placed.");
  chefReceivedOrder()
    .then(() => {
      return pizzaSauceAdded();
    })
    .then(() => {
      return firstLayerOfCheeseAdded();
    })
    .then(() => {
      return toppingsAdded();
    })
    .then(() => {
      return SecondLayerOfCheeseAdded();
    })
    .then(() => {
      return pizzaBaked();
    })
    .then(() => {
      return OreganoAddedAndPacked();
    })
    .then(() => {
      return packageReceivedAtCounter();
    })
    .then(() => {
      console.log("Order ready to be handed over to zomato guy.");
      orderStatusBlocks[9].classList.replace("btn-light", "btn-success")
    });
};

const chefReceivedOrder = () =>
  new Promise((resolve, reject) => {
    orderStatusBlocks[0].classList.replace("btn-light", "btn-success");

    setTimeout(() => {
      console.log("Chef received the order and started preparing.");
      orderStatusBlocks[1].classList.replace("btn-light", "btn-success");

      resolve();
    }, 2000);
  });

const pizzaSauceAdded = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Pizza sauce added.");
      resolve();
      orderStatusBlocks[2].classList.replace("btn-light", "btn-success");
    }, 10000);
  });

const firstLayerOfCheeseAdded = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("First layer of cheese added.");
      orderStatusBlocks[3].classList.replace("btn-light", "btn-success");

      resolve();
    }, 5000);
  });

const toppingsAdded = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Topping added.");
      resolve();
      orderStatusBlocks[4].classList.replace("btn-light", "btn-success");
    }, 12000);
  });

const SecondLayerOfCheeseAdded = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Second layer of cheese added.");
      resolve();
      orderStatusBlocks[5].classList.replace("btn-light", "btn-success");
    }, 5000);
  });

const pizzaBaked = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Pizza baked.");
      resolve();
      orderStatusBlocks[6].classList.replace("btn-light", "btn-success");
    }, 15000);
  });

const OreganoAddedAndPacked = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Oregano added and packed.");
      resolve();
      orderStatusBlocks[7].classList.replace("btn-light", "btn-success");
    }, 8000);
  });

const packageReceivedAtCounter = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Package received at the counter.");
      resolve();
      orderStatusBlocks[8].classList.replace("btn-light", "btn-success");

      ;
    }, 2000);
  });

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

// const executeOrder = ()=>{
//     console.log("Order placed.")
//     chefReceivedOrder()
//     .then(pizzaSauceAdded)
//     .then(firstLayerOfCheeseAdded)
//     .then(toppingsAdded)
//     .then(SecondLayerOfCheeseAdded)
//     .then(pizzaBaked)
//     .then(OreganoAddedAndPacked)
//     .then(packageReceivedAtCounter)
//     .then(()=>{
//         console.log("Order ready and handed over to zomato guy");
//     }).catch((error)=> console.log(error))
// }

//const button = document.querySelectorAll('.btn')
// const buttonColorChange = () =>{
//     button[].setAttribute("class", "colorChange");
// }

// const executeOrder =() =>{
//     let orderId = document.getElementById('order-id-input-text').value
//     document.getElementById('order-id-input-text').value=""
//     document.getElementById("order-id-display").innerHTML = `Status for order ID: <b>${orderId}</b>`
//     document.getElementById("order-id-display").style.display = "block"
//     let orderStatusBlocks = document.getElementsByClassName("order-status-block")
//     // console.log(orderStatusBlocks[0].classList.replace('btn-light', 'btn-success'))

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
