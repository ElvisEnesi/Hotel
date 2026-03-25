// script file!!!!!!!!!!!


// drop down function
// declare variable
const dropdownButtons = document.querySelectorAll('.dropbtn');

// loop through buttons and add click event listener to each
dropdownButtons.forEach(button => {
  button.addEventListener('click', function() {
    const dropdownContent = this.parentNode.querySelector('.dropdown_links');
    const isOpen = dropdownContent.style.display === 'flex';

    // Close ALL open dropdowns first
    document.querySelectorAll('.dropdown_links').forEach(content => {
      content.style.display = 'none';
    });

    // If the one we clicked wasn't already open, open it now
    if (!isOpen) {
      dropdownContent.style.display = 'flex';
    }

  });
});

// Window click listener to close dropdowns when clicking outside

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn') && !event.target.closest('.dropdown_links')) {
    const dropdowns = document.querySelectorAll('.dropdown_links');
    dropdowns.forEach(content => {
      if (content.style.display ='flex') {
        content.style.display ='none';
      }
    });
  }
};


// media header query
// declare variables
let nav = document.querySelector(".nav");
let open_menu = document.querySelector(".openNav");
let close_menu = document.querySelector(".closeNav");
// open menu function
open_menu.addEventListener("click", () => {
    nav.style.right = "0px";
    open_menu.style.display = "none";
    close_menu.style.display = "block";
});
// close menu function
close_menu.addEventListener("click", () => {
    nav.style.right = "-230px";
    open_menu.style.display = "block";
    close_menu.style.display = "none";
});


// dashboard side nav
// declare variables
var side_nav_bar = document.querySelector("#aside");
var open_side_nav = document.querySelector(".openSide");
var close_side_nav = document.querySelector(".closeSide");
// open side nav function
function openSide() {
  side_nav_bar.style.left = "0px";
  open_side_nav.style.display = "none";
  close_side_nav.style.display = "block";
}
// close side nav function
function closeSide() {
  side_nav_bar.style.left = "-300px";
  open_side_nav.style.display = "block";
  close_side_nav.style.display = "none";
}

// modal function!!!!!!!!!!
// Select all images and the modal elements
const modal = document.getElementById("modal");
const close_modal = document.getElementById("close_modal");
const triggers = document.querySelectorAll("#create_modal"); // Select ALL trigger images

// Loop through each trigger image
triggers.forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = "block";
        modal.src = this.src; // Set the modal's image to the clicked image's source
        close_modal.style.display = "block";
    });
});

// Close modal logic
close_modal.addEventListener('click', () => {
    modal.style.display = "none";
    close_modal.style.display = "none";
});


// newsletter form!!!!!!!!!!!!!!
// Select the modal and close button elements
const newsletter = document.getElementsByClassName("newsletter")[0];
const close_newsletter = document.querySelector(".close_newsletter");

// Function to open the modal
function openPopup() {
    newsletter.style.display = "flex"; // Use flex to center content easily
}

// Function to close the modal
function closePopup() {
    newsletter.style.display = "none";
}

// Event listeners
// Show the popup after 5 seconds when the page loads
window.addEventListener("load", () => {
    setTimeout(openPopup, 5000); // 5000 milliseconds = 5 seconds
});

// Close the modal when the close button is clicked
close_newsletter.addEventListener("click", closePopup);

// Close the modal if the user clicks anywhere outside of the content
window.addEventListener("click", (event) => {
    if (event.target !== newsletter) {
        //closePopup();
        newsletter.classList.add("expand_newsletter");
    }
});

//scroll reveal!!!!!!!
// for sections
// const observerOptions = {
//   threshold: 0.1 // Triggers when 10% of the section is visible
// };

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show');
//       // STOP watching once it has appeared (prevents flickering/re-animating)
//       observer.unobserve(entry.target); 
//     }
//   });
// }, observerOptions);

// // Create a function to find and watch sections
// function initScrollReveal() {
//   const sections = document.querySelectorAll('section');
//   sections.forEach((section) => {
//     observer.observe(section);
//   });
// }

// // Run it immediately for the current page
// initScrollReveal();

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry)
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show');
//     }
//   });
// });
// const sections = document.querySelectorAll('section');
// sections.forEach((section) => {
//   observer.observe(section);
// }); 
// // for h1 
// const h1_observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry)
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show_h1');
//     }
//   });
// });
// const h1_sections = document.querySelectorAll('h1');
// h1_sections.forEach((h1_section) => {
//   h1_observer.observe(h1_section);
// }); 
// // for p.desc
// const p_observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry)
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show_p');
//     }
//   });
// });
// const p_desc = document.querySelectorAll('.desc');
// p_desc.forEach((p) => {
//   p_observer.observe(p);
// }); 
// // for features
// const features_observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry)
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show_features');
//     }
//   });
// });
// const features = document.querySelectorAll('.feature');
// features.forEach((feature) => {
//   features_observer.observe(feature);
// }); 

// // for features
// const promo_observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry)
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show_promo');
//     }
//   });
// });
// const promos = document.querySelectorAll('.promo');
// promos.forEach((promo) => {
//   promo_observer.observe(promo);
// }); 
// // for comment_cards
// const comment_cards_observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry)
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show_comments');
//     }
//   });
// });
// const comment_cards = document.querySelectorAll('.comment_cards');
// comment_cards.forEach((comment_card) => {
//   comment_cards_observer.observe(comment_card);
// }); 
// // for comment_form
// const comment_form_observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry)
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show_form');
//     }
//   });
// });
// const comment_form = document.querySelectorAll('.comment_form');
// comment_form.forEach((comment) => {
//   comment_form_observer.observe(comment);
// }); 


// show password function
// declare variable 
let check =  document.getElementById("check");
function show_login_key() {
  let password = document.getElementById("password");
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}

// room gallery slide show
let slideIndex = 1;
showSlides(slideIndex);
// function to change slides
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function showSlides(n) {
  let j;
  let slides = document.getElementsByClassName("gallery_slides");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (j = 0; j < array.length; j++) {
    slides[j].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// Team modal function!!!!!!!!!!
// Select all images and the modal elements
const team_modal = document.getElementById("team_modal");
const close_team_modal = document.getElementById("close_team_modal");
const team_triggers = document.querySelectorAll("#create_team_modal"); // Select ALL trigger images

// Loop through each trigger image
team_triggers.forEach(images => {
    images.addEventListener('click', function() {
        team_modal.style.display = "block";
        team_modal.src = this.src; // Set the modal's image to the clicked image's source
        close_team_modal.style.display = "block";
    });
});

// Close team modal logic
close_team_modal.addEventListener('click', () => {
    team_modal.style.display = "none";
    close_team_modal.style.display = "none";
});

window.addEventListener('click', (event) => {
    if (event.target == team_modal) {
        team_modal.style.display = "none";
        close_team_modal.style.display = "none";
    }
});
