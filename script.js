function navigateTo(page) {
    window.parent.display.location.href = page;
}
function showDetails(id) {
    const details = document.getElementById(id);
    details.style.display = details.style.display === "block" ? "none" : "block";
}
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for reaching out! We will respond to your inquiry shortly.");
    window.location.href = "index.html";
});
