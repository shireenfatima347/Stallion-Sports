document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", async function (event) {
            event.preventDefault();

            const name = document.querySelector("input[placeholder='Your Name']").value;
            const email = document.querySelector("input[placeholder='Your Email']").value;
            const message = document.querySelector("textarea[placeholder='Your Message']").value;

            if (!name || !email || !message) {
                alert("Please fill all fields!");
                return;
            }

            const response = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, message })
            });

            const data = await response.json();
            alert(data.message);
            contactForm.reset();
        });
    }
});
