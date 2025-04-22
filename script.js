document.addEventListener('DOMContentLoaded', () => {
    const orderForm = document.getElementById('order-form');

    orderForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Validate form
        const size = document.getElementById('size').value;
        const toppings = document.querySelectorAll('input[name="toppings"]:checked');
        const name = document.getElementById('name').value.trim();
        const address = document.getElementById('address').value.trim();
        const phone = document.getElementById('phone').value.trim();

        if (size === '' || name === '' || address === '' || phone === '') {
            alert('Please fill out all required fields.');
            return;
        }

        if (toppings.length === 0) {
            alert('Please select at least one topping.');
            return;
        }

        // Process the order (for demonstration purposes)
        let orderSummary = `Order Summary:\n\n`;
        orderSummary += `Size: ${size}\n`;
        orderSummary += `Toppings:\n`;

        toppings.forEach(topping => {
            orderSummary += `- ${topping.value}\n`;
        });

        orderSummary += `\nCustomer Name: ${name}\n`;
        orderSummary += `Delivery Address: ${address}\n`;
        orderSummary += `Phone Number: ${phone}\n`;

        alert(orderSummary);
    });
});
