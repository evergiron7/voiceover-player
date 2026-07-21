const form = document.getElementById("contactForm");
const submitButton = document.getElementById("submitButton");

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    submitButton.disabled = true;
    submitButton.textContent = "SENDING...";

    const data = new FormData(form);

    try {

        const response = await fetch(form.action, {
            method: "POST",
            body: data,
            headers: {
                Accept: "application/json"
            }
        });

        if (response.ok) {

            form.style.display = "none";

            document.getElementById("successMessage").style.display = "block";

            form.reset();

        } else {

            alert("Sorry, something went wrong. Please try again.");

            submitButton.disabled = false;
            submitButton.textContent = "SEND MESSAGE";

        }

    } catch (error) {

        alert("Unable to send your message. Please check your internet connection.");

        submitButton.disabled = false;
        submitButton.textContent = "SEND MESSAGE";

    }

});