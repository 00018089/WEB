const tabs = document.querySelectorAll(".tab");
const categories = document.querySelectorAll(".category-item");
const products = document.querySelectorAll(".product-item");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");

        const selectedCategory = tab.dataset.category;

        // Filter categories
        categories.forEach((item) => {
            if (selectedCategory === "all" || item.dataset.category === selectedCategory) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });

        // Filter products
        products.forEach((item) => {
            if (selectedCategory === "all" || item.dataset.category === selectedCategory) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});

// Search functionality
const searchInput = document.getElementById("search");

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    products.forEach((item) => {
        const text = item.innerText.toLowerCase();
        if (text.includes(query)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});

// Clear filters
const clearFilterButton = document.querySelector(".clear-filter");
clearFilterButton.addEventListener("click", () => {
    document.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
        checkbox.checked = false;
    });
});

// Collapsible functionality
const collapsibleHeaders = document.querySelectorAll(".collapsible");
collapsibleHeaders.forEach((header) => {
    header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const hamburgerMenu = document.getElementById("hamburger-menu");

    menuButton.addEventListener("click", function () {
        hamburgerMenu.classList.toggle("hidden");
    });
});