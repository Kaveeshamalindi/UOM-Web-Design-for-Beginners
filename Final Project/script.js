// ------------------------------
// Explore Now Button
// ------------------------------

document.getElementById("exploreButton").addEventListener("click", function () {

    document.getElementById("places").scrollIntoView({
        behavior: "smooth"
    });

});


// ------------------------------
// Search Destinations
// ------------------------------

document.getElementById("searchInput").addEventListener("input", function () {

    const searchValue = this.value.toLowerCase();

    const cards = document.querySelectorAll(".place-card");

    cards.forEach(function (card) {

        const placeName = card.dataset.name;

        if (placeName.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});


// ------------------------------
// Place Information
// ------------------------------

function showPlaceInfo(place) {

    let message = "";

    if (place === "Kandy") {

        message =
            "Kandy is a beautiful city in the Central Province of Sri Lanka. " +
            "It is famous for the Temple of the Sacred Tooth Relic, Kandy Lake and beautiful mountains.";

    }

    else if (place === "Ella") {

        message =
            "Ella is a popular mountain destination famous for Nine Arch Bridge, " +
            "Ella Rock, Little Adam's Peak and scenic train journeys.";

    }

    else if (place === "Galle") {

        message =
            "Galle is a historic coastal city famous for Galle Fort, beaches " +
            "and beautiful colonial architecture.";

    }

    alert(message);

}


// ------------------------------
// Dark / Light Mode
// ------------------------------

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeButton.innerHTML = "☀️";

    } else {

        themeButton.innerHTML = "🌙";

    }

});


// ------------------------------
// Contact Form
// ------------------------------

function sendMessage() {

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();

    const formMessage =
        document.getElementById("formMessage");


    if (name === "" || email === "" || message === "") {

        formMessage.innerHTML =
            "Please fill in all fields.";

        formMessage.style.color = "red";

        return;
    }


    if (!email.includes("@")) {

        formMessage.innerHTML =
            "Please enter a valid email address.";

        formMessage.style.color = "red";

        return;
    }


    formMessage.innerHTML =
        "Thank you, " + name + "! Your message has been received.";

    formMessage.style.color = "green";


    // Clear form

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

}


// ------------------------------
// Back To Top Button
// ------------------------------

const topButton =
    document.getElementById("topButton");


window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});


topButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ------------------------------
// Automatic Current Year
// ------------------------------

document.getElementById("year").textContent =
    new Date().getFullYear();
