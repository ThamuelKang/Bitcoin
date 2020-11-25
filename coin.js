const url = "https://api.coindesk.com/v1/bpi/currentprice.json"
const priceTag = document.querySelector("h1")
const spanTag = document.querySelector("span")
const updatedTag = document.querySelector("h3")

let currency = "USD"


//make a function that grab data from Coindesk
const checkPrice = function () {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            priceTag.innerHTML = "$"+ data.bpi[currency].rate_float.toFixed(2)
        })

    let date = new Date();
    // let formatted = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()

    updatedTag.innerHTML = "Last updated: " + date
}

//run this on load 
checkPrice()


// check the price every 60 seconds 
setInterval(function () {
    checkPrice()
}, 60000)