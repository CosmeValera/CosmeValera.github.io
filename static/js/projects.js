alert("HOlA")
document.addEventListener("DOMContentLoaded", function () {
const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        alert("HOla")
    const selectedFilter = button.getAttribute("data-filter");

    projectCards.forEach((card) => {
        const cardTechnology = card.querySelector(".card-technology").textContent;

        if (selectedFilter === "all" || cardTechnology.includes(selectedFilter)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
            });
        });
    });
});