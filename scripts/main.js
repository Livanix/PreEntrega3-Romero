let cart = [];
let addToCartButtons = document.querySelectorAll('.product-grid-item button');
for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', function() {
        let product = this.parentElement.querySelector('h3').textContent;
        let price = parseFloat(this.parentElement.querySelector('p').textContent.replace('US$', ''));
        let image = this.parentElement.querySelector('img').src;
        cart.push({product, price, image});
        updateCart();
    });
}

function updateCart() {
    let cartList = document.querySelector('.cart ul');
    cartList.innerHTML = '';
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        let item = document.createElement('li');
        item.innerHTML = `<img src="${cart[i].image}">${cart[i].product} - US$${cart[i].price.toFixed(2)} <button data-index="${i}">Eliminar</button>`;
        cartList.appendChild(item);
        total += cart[i].price;
    }
    document.querySelector('.total').textContent = total.toFixed(2);
    document.querySelector('.cart-count').textContent = cart.length;

    let removeButtons = document.querySelectorAll('.cart li button');
    for (let i = 0; i < removeButtons.length; i++) {
        removeButtons[i].addEventListener('click', function() {
            let index = parseInt(this.getAttribute('data-index'));
            cart.splice(index, 1);
            updateCart();
        });
    }
}

document.querySelector('.toggle-cart').addEventListener('mouseover', function() {
    document.querySelector('.cart').classList.add('open');
  });

  document.querySelector('.toggle-cart').addEventListener('mouseout', function() {
    document.querySelector('.cart').classList.remove('open');
  });
  document.querySelector('.cart').addEventListener('mouseout', function() {
    document.querySelector('.cart').classList.remove('open');
  });

  document.querySelector('.cart').addEventListener('mouseover', function() {
    document.querySelector('.cart').classList.add('open');
  });
 