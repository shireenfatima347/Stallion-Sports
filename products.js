document.addEventListener("DOMContentLoaded", async function () {
    const productContainer = document.querySelector(".product-list");

    if (productContainer) {
        try {
            const response = await fetch("http://localhost:5000/api/products");
            const products = await response.json();

            products.forEach(product => {
                const productCard = document.createElement("div");
                productCard.classList.add("product-card");

                productCard.innerHTML = `
                    <img src="${product.imageUrl}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <span class="price">$${product.price}</span>
                `;

                productContainer.appendChild(productCard);
            });
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }
});
