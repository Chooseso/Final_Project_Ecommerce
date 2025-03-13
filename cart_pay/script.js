document.addEventListener("DOMContentLoaded", function () {
    const checkoutBtn = document.getElementById("checkout-btn");
    const checkoutForm = document.getElementById("checkout-form");
    const overlay = document.getElementById("overlay");
    const closeBtn = document.getElementById("close-btn");

    checkoutBtn.addEventListener("click", function () {
        checkoutForm.style.display = "flex";
        overlay.style.display = "block";
    });

    closeBtn.addEventListener("click", function () {
        checkoutForm.style.display = "none";
        overlay.style.display = "none";
    });

    overlay.addEventListener("click", function () {
        checkoutForm.style.display = "none";
        overlay.style.display = "none";
    });
});
