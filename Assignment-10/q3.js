document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submitOrder").addEventListener("click", function() {
        let size = document.querySelector('input[name="size"]:checked');
        if (!size) {
            alert("Please select a pizza size.");
            return;
        }

        let toppings = [];
        document.querySelectorAll('input[name="topping"]:checked').forEach(function(checkbox) {
            toppings.push(checkbox.value);
        });

        if (toppings.length === 0) {
            alert("Please select at least one topping.");
            return;
        }

        let summary = `You ordered a ${size.value} pizza with ${toppings.join(", ")}. 🍕`;
        document.getElementById("orderSummary").innerText = summary;
    });
});
