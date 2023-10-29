const portfolio = document.getElementById("portfolio");
const targetPortfolio = document.getElementById("targetPortfolio");
const about = document.getElementById("about");
const targetAbout = document.getElementById("targetAbout");
const contact = document.getElementById("contact");
const targetContact = document.getElementById("targetContact");
const toTop = document.getElementById("toTop");


portfolio.addEventListener("click", function () {
    console.log("Portfolio clicked")
    targetPortfolio.scrollIntoView({ behavior: "smooth" });
});

about.addEventListener("click", function () {
    console.log("about clicked")
    targetAbout.scrollIntoView({ behavior: "smooth" });
});

contact.addEventListener("click", function () {
    console.log("contact clicked")
    targetContact.scrollIntoView({ behavior: "smooth" });
});

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // toTop.style.display = "block";
        toTop.classList.add("active")
    } else {
        // toTop.style.display = "none";
        toTop.classList.remove("active")
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}