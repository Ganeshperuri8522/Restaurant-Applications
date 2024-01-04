const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

function addToCart(event) {
    const menuItem = event.target.closest('.menu-item');
    const itemName = menuItem.dataset.item;
    const itemPrice = parseFloat(menuItem.dataset.price);

    // Here you can implement your cart logic
    // For example, you can add the selected item to a shopping cart object
    // and update the UI accordingly.
    // You can also use local storage or a backend server to manage the cart.
    console.log(`Added "${itemName}" to cart. Price: $${itemPrice}`);
}
