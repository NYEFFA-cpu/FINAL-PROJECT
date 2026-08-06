// shalyn
// Linen & Lore Gallery js
// Select Elements
const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");
const cartButtons = document.querySelectorAll(".cart-btn");
const cartCount = document.getElementById("cart-count");
const heartButtons = document.querySelectorAll(".heart");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");
const viewButtons = document.querySelectorAll(".view-btn");
const topBtn = document.getElementById("topBtn");
let cart = 0;

// Filter Gallery Cards
filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        // Remove active class
        filterButtons.forEach(btn => btn.classList.remove("active"));

        // Add active class
        button.classList.add("active");
        const filter = button.dataset.filter;
        cards.forEach(card => {
            if (filter === "all") {
                card.style.display = "block";
            } else {
                if (card.classList.contains(filter)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            }
        });
    });
});

// Add To Cart Button
cartButtons.forEach(button => {
    button.addEventListener("click", () => {
        cartCount.textContent = cart;
        button.textContent = "Added ✓";
        button.style.background = "#2F8F5B";
        setTimeout(() => {
            button.textContent = "Add to Cart";
            button.style.background = "";
        }, 1200);
    });
});

// Favourite Button
heartButtons.forEach(button => {
    button.addEventListener("click", () => {
        const icon = button.querySelector("i");
        if(icon.classList.contains("fa-regular")){
            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");
            button.style.background = "crimson";
            button.style.color = "white";
        }else{
            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");
            button.style.background = "white";
            button.style.color = "crimson";
        }
    });
});

// Quick View Modal
viewButtons.forEach(button => {
    button.addEventListener("click", () => {
        const card = button.closest(".card");
        const image = card.querySelector("img").src;
        const title = card.querySelector("h3").textContent;
        const price = card.querySelector("p").textContent;
        modal.querySelector("h2").textContent = title;
        modal.querySelector("p").innerHTML = `
        <img src="${image}"
        style="
        width:100%;
        border-radius:12px;
        margin-bottom:20px;
        height:350px;
        object-fit:cover;
        ">
        <strong style="font-size:20px;">
        ${price}
        </strong>
        <br><br>
        Crafted from premium linen with timeless elegance.
        Perfect for every occasion.
        `;
        modal.style.display = "flex";
    });
});

// Close Modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Click Outside Modal
window.addEventListener("click", e => {
    if(e.target === modal){
        modal.style.display = "none";
    }
});

// Scroll To Top Button
window.addEventListener("scroll", () => {
    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }
});
topBtn.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

// Simple Page Load Animation
window.addEventListener("load", () => {
    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        setTimeout(() => {
            card.style.transition = ".6s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 150);
    });
});
// shalyn
