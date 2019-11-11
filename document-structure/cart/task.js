let products = document.getElementsByClassName('product');
let productQuantity = document.getElementsByClassName('product__quantity-value');
let cartProducts = document.querySelector(".cart__products");

function addProductCart(id, item, image) {
  return `<div class="cart__product" data-id="${id}">
            <img class="cart__product-image" src="${image}">
            <div class="cart__product-count">${item}</div>
        </div>`;
}

for (let i = 0; i < products.length; i++) {
  products[i].addEventListener("click", e => {
    e.preventDefault();

    if (e.target.classList.contains("product__quantity-control_dec") && productQuantity[i].textContent > 1) {
      productQuantity[i].textContent--;
    }
    if (e.target.classList.contains("product__quantity-control_inc")) {
      productQuantity[i].textContent++;
    }

    if (e.target.classList.contains("product__add")) {
      let image = e.target.closest(".product").querySelector(".product__image").getAttribute("src");
      let id = e.target.closest(".product").dataset.id;
      let text = e.target.closest(".product").querySelector(".product__quantity-value").textContent;

      if (cartProducts.children.length !== 0 && cartProducts.querySelector(`[data-id="${id}"]`)) {
        cartProducts.querySelector(`[data-id="${id}"]`).querySelector(".cart__product-count").textContent = Number(cartProducts.querySelector(`[data-id="${id}"]`).querySelector(".cart__product-count").textContent) + Number(text);
      } else {
        cartProducts.innerHTML += addProductCart(id, Number(text), image);
      }
    }
  });
}
