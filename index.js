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

// Sends the data from my website's contact form to my google sheet 
const scriptURL = 'https://script.google.com/macros/s/AKfycbzccJKBiXxI-yFXMRsA12Raao39j_-5D735bHrOkkipXS_tql9yqtUaiLekOhjxvBey/exec';
  const formSuccessMsg = document.getElementById("form-success-msg");
  const requestForm = document.getElementById("request-form");

  requestForm.addEventListener("submit", event => {
    event.preventDefault(); // Prevent form from reloading the page

    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(requestForm)
    })
    .then(response => {
      console.log('Success!', response);
      formSuccessMsg.style.display = "block"; // Show success message
      requestForm.reset();                    // Reset the form
    })
    .catch(error => {
      console.error('Error!', error.message);
      alert("There was a problem submitting your form. Please try again.");
    });
  });

const aboutDescription = document.getElementById("text-about");
// Changes the text content for smaller screens
function makeTextSmalller(){
  if(window.innerWidth <= 600){
    aboutDescription.textContent = "Computer Engineering graduate passionate about web development with HTML, CSS, JavaScript and ICT tools like Microsoft 365, AAD, Intune, Exchange Online, and SharePoint Online. Always eager to learn, build, and contribute.";
  }
}
makeTextSmalller();