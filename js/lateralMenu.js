const fabButton = document.querySelector('.fab-button');
const fabButtonIcon = document.querySelector('.fab-button-i');
const lateralMenu = document.querySelector('.lateral-menu');

// Toggle menu visibility when FAB button is clicked
fabButton.addEventListener('click', () => {
  fabButton.classList.toggle('active');
  lateralMenu.classList.toggle('active');
  fabButtonIcon.classList.toggle('fa-ellipsis-v');
  fabButtonIcon.classList.toggle('fa-times');
});