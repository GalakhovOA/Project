// static/shop/js/product_list.js
document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productId = this.getAttribute('data-product-id');
            alert(`Product ID ${productId} added to cart!`);
            // Здесь вы можете добавить логику для добавления продукта в корзину
        });
    });
});
