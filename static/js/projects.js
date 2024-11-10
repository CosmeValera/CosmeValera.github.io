function clickFilterToggleButton() {
    const filterToggleButton = document.querySelector('.filter-toggle-button');
    const filterDropdown = document.querySelector('.filter-dropdown');

    filterToggleButton.addEventListener('click', () => {
        filterDropdown.classList.toggle('show'); // Toggle the "show" class to display/hide filters
    });
}

function clickFilterRendersCards() {
    const ALL_FILTER_VALUE = "All";
    const JAVA_FILTER_VALUE = "Java";
    const JAVASCRIPT_FILTER_VALUE = "JavaScript";

    const filterButtons = document.querySelectorAll(".filter-button");
    const projectCards = document.querySelectorAll(".project-card");
    const animationClasses = ["animate__bounceInLeft", "animate__bounceIn", "animate__bounceInRight"];
    let currentSelectedFilter = ALL_FILTER_VALUE; // Start with "All" selected initially
    let previousVisibleCards = Array.from(projectCards).map((card, index) => ({
        card: card,
        position: index
    })); // Initialize with the first set of visible cards and their positions

    
    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const selectedFilter = button.getAttribute("data-filter");

            // When clicking a filter: 1st time-> blue, 2nd time-> All is triggered
            if (currentSelectedFilter !== selectedFilter) {
                const prevButton = document.querySelector(`[data-filter="${currentSelectedFilter}"]`);
                prevButton.classList.remove("selected-filter");
                button.classList.add("selected-filter");
                currentSelectedFilter = selectedFilter;
            } else if (currentSelectedFilter !== ALL_FILTER_VALUE) {
                const allButton = document.querySelector(`[data-filter=${ALL_FILTER_VALUE}]`);
                allButton.classList.add("selected-filter");
                button.classList.remove("selected-filter");
                currentSelectedFilter = ALL_FILTER_VALUE;
            }

            // Filter cards
            const visibleCards = Array.from(projectCards).filter((card) => {
                const cardTechnology = card.querySelector(".card-technology").textContent;
                return currentSelectedFilter === ALL_FILTER_VALUE ||
                    (cardTechnology.includes(currentSelectedFilter) &&
                    !(currentSelectedFilter === JAVA_FILTER_VALUE && cardTechnology.includes(JAVASCRIPT_FILTER_VALUE)));
            });

            // Cards reappear with their new animation, except those that have same the position
            visibleCards.forEach((card, index) => {
                const previousCardIndex = previousVisibleCards.findIndex(prevCard => prevCard.card === card);
                if (previousCardIndex !== -1 && previousVisibleCards[previousCardIndex].position === index) {
                    return; // Skip cards with unchanged position
                }

                card.style.display = "none";
                setTimeout(() => {
                    card.style.display = "block";
                    card.classList.add(animationClasses[index % 3]);
                    card.classList.remove(animationClasses[(index + 1) % 3]);
                    card.classList.remove(animationClasses[(index + 2) % 3]);
                }, 1);
            });

            // Display none to not filtered cards
            projectCards.forEach((card) => {
                if (!visibleCards.includes(card)) {
                    card.style.display = "none";
                }
            });

            // Update previousVisibleCards with current positions
            previousVisibleCards = visibleCards.map((card, index) => ({
                card: card,
                position: index
            }));
        });
    });
}

//////////
// MAIN //
//////////
document.addEventListener("DOMContentLoaded", function () {

    clickFilterToggleButton() // PHONE: Makes filter buttons appear

    clickFilterRendersCards() // REACT, ANGULAR, NODE ...

});
