document.addEventListener("DOMContentLoaded", () => {
    fetchProducts();
});

function fetchProducts() {
    fetch("http://localhost:5000/api/products") // Change this to deployed URL after deployment
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Products:", data);
            displayProducts(data);
        })
        .catch(error => console.error("Error fetching products:", error));
}

function displayProducts(products) {
    const productContainer = document.getElementById("product-list");
    productContainer.innerHTML = ""; // Clear existing content

    products.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `<h3>${product.name}</h3><p>Price: $${product.price}</p>`;
        productContainer.appendChild(div);
    });
}
