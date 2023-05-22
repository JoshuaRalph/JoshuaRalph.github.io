let carts = document.querySelectorAll('.buy');

let products = [{
        name: 'brent gas',
        tag: 'brent',
        price: 789,
        inCart: 0
    },
    {
        name: 'ec gas',
        tag: 'ecgas',
        price: 891,
        inCart: 0
    },
    {
        name: 'fiesta',
        tag: 'fiesta',
        price: 901,
        inCart: 0
    },
    {
        name: 'islandgas',
        tag: 'islandgas',
        price: 751,
        inCart: 0
    },
    {
        name: 'petron gasul',
        tag: 'petron',
        price: 951,
        inCart: 0
    },
    {
        name: 'pheonix super lpg',
        tag: 'pheonix',
        price: 832,
        inCart: 0
    },
    {
        name: 'prycegas',
        tag: 'prycegas',
        price: 815,
        inCart: 0
    },
    {
        name: 'regasco',
        tag: 'regasco',
        price: 975,
        inCart: 0
    },
    {
        name: 'shine gaz',
        tag: 'shine',
        price: 775,
        inCart: 0
    },
    {
        name: 'solane',
        tag: 'solane',
        price: 799,
        inCart: 0
    },
    {
        name: 'brent gas',
        tag: 'brent',
        price: 789,
        inCart: 0
    },
    {
        name: 'ec gas',
        tag: 'ecgas',
        price: 891,
        inCart: 0
    },
    {
        name: 'fiesta',
        tag: 'fiesta',
        price: 901,
        inCart: 0
    },
    {
        name: 'islandgas',
        tag: 'islandgas',
        price: 751,
        inCart: 0
    },
    {
        name: 'petron gasul',
        tag: 'petron',
        price: 951,
        inCart: 0
    },
    {
        name: 'pheonix super lpg',
        tag: 'pheonix',
        price: 832,
        inCart: 0
    },
    {
        name: 'prycegas',
        tag: 'prycegas',
        price: 815,
        inCart: 0
    },
    {
        name: 'regasco',
        tag: 'regasco',
        price: 975,
        inCart: 0
    },
    {
        name: 'shine gaz',
        tag: 'shine',
        price: 775,
        inCart: 0
    },
    {
        name: 'solane',
        tag: 'solane',
        price: 799,
        inCart: 0
    }
]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.cart-wrapper span').textContent = productNumbers;
    }
}

function cartNumbers(product) {

    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart-wrapper span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart-wrapper span').textContent = 1;
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems)
    console.log("My cartItems are", cartItems);

    if (cartItems != null) {

        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;

        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    //console.log("Price", product.price);
    let cartCost = localStorage.getItem('totalCost');

    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }

}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let shoppingWrap = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');

    console.log(cartItems);
    if (cartItems && shoppingWrap) {
        shoppingWrap.innerHTML = '';
        Object.values(cartItems).map(item => {
            shoppingWrap.innerHTML += `
            <div class="products">
                <ion-icon name="close-circle-outline"></ion-icon>
                <img src="./images/LPG/${item.tag}.jpg">
                <span>${item.name}</span>
            </div>
            <div class ="price">&#x20B1;${item.price},00</div>
            <div class = "quantity"> 
            <ion-icon class = "dec" name="chevron-back-circle-outline"></ion-icon>
            <span>${item.inCart}</span>
            <ion-icon class = "inc" name="chevron-forward-circle-outline"></ion-icon>
            </div>
            <div class = "total">
            $${item.inCart * item.price},00
            </div>
            `;
        });

        shoppingWrap.innerHTML += `
        <div class ="basketTotalContainer">
            <h4 class="basketTotalTitle">
                Basket Total
            </h4>
            <h4 class = "basketTotal">
            &#x20B1;${cartCost},00
            </h4>
        </div>
        `;
    }
}

onLoadCartNumbers()
displayCart();


function scrollToTop() {
    window.scrollTo(0, 0);
}