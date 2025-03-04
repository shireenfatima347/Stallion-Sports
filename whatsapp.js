document.addEventListener("DOMContentLoaded", function () {
    const whatsappButton = document.querySelector(".whatsapp-link");

    if (whatsappButton) {
        whatsappButton.addEventListener("click", function () {
            window.open("https://wa.me/918303530386", "_blank");
        });
    }
});
