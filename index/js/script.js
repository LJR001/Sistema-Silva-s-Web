document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("product-form");
    const productList = document.getElementById("product-list");

    let products = [];

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const quantity = document.getElementById("quantity").value;
        const price = document.getElementById("price").value;

        if (name && quantity && price) {
            const product = { name, quantity, price };
            products.push(product);
            updateTable();
            form.reset();
        }
    });

    function updateTable() {
        productList.innerHTML = "";
        products.forEach((product, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${product.name}</td>
                <td>${product.quantity}</td>
                <td>R$ ${parseFloat(product.price).toFixed(2)}</td>
                <td>
                    <button onclick="removeProduct(${index})">🗑</button>
                </td>
            `;
            productList.appendChild(row);
        });
    }

    window.removeProduct = (index) => {
        products.splice(index, 1);
        updateTable();
    };
});
