// Add the current year to the span tag in the footer
const yearFooter = document.getElementById("year-footer"); 
yearFooter.textContent = new Date().getFullYear();

// Getting the button from the DOM
const scrollBtn = document.getElementById("scroll-btn");
// Displays the button when 150px is scrolled down from the top of the page
  window.addEventListener("scroll", () => {
    if (window.scrollY > 150) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });
// Scrolls to the top of the page smoothly
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });


// Getting the navigation list and buttons from the DOM
const navbarList = document.getElementById("navbar-list");
const closeNavBtn = document.getElementById("close-nav-btn");
const openNavBton = document.getElementById("open-nav-btn");

// Opening the mobile navbar menu when the dropdown icon is clicked
function openNav(){
    if (window.innerWidth <= 600) {
    openNavBton.style.display = "none";
    navbarList.style.display = "grid";
    navbarList.style.position = "fixed";
    navbarList.style.top = "0";
    navbarList.style.right = "30px";
    navbarList.style.marginTop = "10%";
    navbarList.style.height = "100vh";
    navbarList.style.padding = "50px"; 
    closeNavBtn.style.position = "fixed";
    closeNavBtn.style.cursor = "pointer";
    closeNavBtn.style.top = "45px";
    closeNavBtn.style.right = "60px";
    closeNavBtn.style.fontSize = "2rem";
    closeNavBtn.style.display = "block";
    }
}
// Closing the mobile navbar menu when the X icon is clicked
function closeNav(){
    if (window.innerWidth <= 600) {
    openNavBton.style.display = "grid";
    closeNavBtn.style.display = "none";
    openNavBton.style.position = "absolute";
    openNavBton.style.cursor = "pointer";
    openNavBton.style.top = "45px";
    openNavBton.style.right = "60px";
    openNavBton.style.fontSize = "2rem";
    navbarList.style.display = "none";
    }
}
// Hides the mobile menu after clicking on a navigation link
document.querySelectorAll('#navbar-list a').forEach(link => {
  link.addEventListener('click', closeNav);
});

// Getting the form and the message from the DOM
const formSuccessMsg = document.getElementById("form-success-msg");
const requestForm = document.getElementById("request-form");

// Adding an event listener to prevent page reload and call the successMessage function
requestForm.addEventListener("submit", event => {
  event.preventDefault();  // Prevent page reload
  successMessage();
});
// Displays the message and resets the form when the submit button is clicked
function successMessage() {
  formSuccessMsg.style.display = "block";
  requestForm.reset();
}