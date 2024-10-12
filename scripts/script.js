document.addEventListener('DOMContentLoaded', () => {
    // Caching DOM elements to avoid querying the DOM multiple times
    const unitOptions = document.querySelectorAll('.unit-option');
    const totalPriceElement = document.getElementById('total-price');
    const sizeColorOptions = document.querySelectorAll('.size-color-options');
    const addToCartButton = document.querySelector('.add-to-cart');

    // Price map - encapsulated for easy configuration in the future
    const priceMap = {
        1: 10.00,
        2: 18.00,
        3: 24.00
    };

    let selectedUnit = 1; // Default selected unit

    /**
     * Update the total price and visibility of size/color options
     */
    const updateSelection = () => {
        unitOptions.forEach((option, index) => {
            const radio = option.querySelector('input[type="radio"]');
            const isSelected = radio.checked;

            // Toggle selected class and update total price if unit is selected
            if (isSelected) {
                selectedUnit = radio.value;
                option.classList.add('selected');
                updateTotalPrice(selectedUnit);
                toggleSizeColorOptions(index, true);
            } else {
                option.classList.remove('selected');
                toggleSizeColorOptions(index, false);
            }
        });
    };

    /**
     * Update the total price in the UI
     * @param {Number} unit - The unit selected by the user
     */
    const updateTotalPrice = (unit) => {
        const price = priceMap[unit];
        totalPriceElement.textContent = `Total: $${price.toFixed(2)} USD`;
    };

    /**
     * Toggle visibility of size and color selection fields
     * @param {Number} index - The index of the size/color section to show or hide
     * @param {Boolean} show - Whether to show (true) or hide (false) the section
     */
    const toggleSizeColorOptions = (index, show) => {
        sizeColorOptions[index].style.display = show ? 'grid' : 'none';
    };

    /**
     * Handle the "Add to Cart" functionality
     */
    const handleAddToCart = () => {
        const cartItem = getCartItemDetails();

        if (!cartItem) return;

        // Store in local storage (or handle with an API call)
        addCartItemToLocalStorage(cartItem);

        // Show success message with Swal
        alert("Item added to cart!")
    };

    /**
     * Gather selected product details
     * @returns {Object} cartItem - The details of the selected item
     */
    const getCartItemDetails = () => {
        const selectedSize1 = document.getElementById('size1')?.value || '';
        const selectedColor1 = document.getElementById('color1')?.value || '';
        const selectedSize2 = document.getElementById('size2')?.value || '';
        const selectedColor2 = document.getElementById('color2')?.value || '';

        return {
            unit: selectedUnit,
            price: priceMap[selectedUnit],
            sizes: [selectedSize1, selectedSize2],
            colors: [selectedColor1, selectedColor2]
        };
    };

    /**
     * Add the item to localStorage or handle storage (e.g., API)
     * @param {Object} cartItem - The cart item to be stored
     */
    const addCartItemToLocalStorage = (cartItem) => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    // Attach event listeners
    unitOptions.forEach(option => {
        option.addEventListener('click', function () {
            this.querySelector('input[type="radio"]').checked = true;
            updateSelection();
        });
    });

    addToCartButton.addEventListener('click', handleAddToCart);

    // Initialize on page load
    updateSelection();
});
