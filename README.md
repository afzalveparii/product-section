# Project Documentation 📄

## Overview 🌟
This project is a user product cart built with HTML, CSS, and JavaScript. It allows users to select product units, sizes, and colors, and add items to their cart, which are stored in the browser's local storage.

## Features 🚀
- **Unit Selection**: Users can select the quantity of products (1, 2, or 3).
- **Size and Color Options**: Users can choose product sizes and colors.
- **Add to Cart**: Users can click the "Add to Cart" button to store their selections in local storage.

## Installation 🛠️
To install the project, clone the repository and open the `index.html` file in your browser.

## Usage 📖
1. Select the desired quantity of the product.
2. Choose the product size and color.
3. Click the "Add to Cart" button to save your selections.

## Local Storage Implementation 💾
The selected values are stored in the browser's local storage for persistence. Here’s a simplified example of how to implement this in JavaScript:
```javascript
// 🛒 Function to add product to cart
function addToCart(product) {
    // 📦 Retrieve existing cart from local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // ➕ Add the new product to the cart
    cart.push(product);
    
    // 💾 Save the updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Example usage of the addToCart function
const product = {
    id: 1,               // 🆔 Product ID
    name: 'Product Name', // 🏷️ Product Name
    quantity: 2,         // 🔢 Selected Quantity
    size: 'M',           // 📏 Selected Size
    color: 'Red'         // 🎨 Selected Color
};

// 🛍️ Call the function to add the product to the cart
addToCart(product);
```
## Contributing 🤝
We welcome contributions! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License 📜
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact 📬
For any inquiries, please reach out to [afzal.vepariii@gmail.com].
