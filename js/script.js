function showTab(event, tabId) {
    // Get the elements for title, paragraph, and image
    const title = document.getElementById('tab-title');
    const paragraph = document.getElementById('tab-paragraph');
    const image = document.getElementById('tab-image');

    // Define the content for each tab, including image src and alt text
    const content = {
        'who-we-are': {
            title: 'Who We Are',
            paragraph: 'Balance Mind Hub is a compassionate collective of mental health professionals, tech innovators, and empathetic individuals...',
            imageSrc: 'img/meditating.jpg',  // Image for "Who We Are"
            imageAlt: 'Illustration of a compassionate group'
        },
        'our-goals': {
            title: 'Our Goals',
            paragraph: 'Our goal is to create a safe space for people to access mental health resources and support systems.',
            imageSrc: 'img/goal.png',   // Image for "Our Goals"
            imageAlt: 'Illustration representing goals'
        },
        'our-team': {
            title: 'Our Team',
            paragraph: 'Meet our diverse team of mental health experts, developers, and community leaders.',
            imageSrc: 'img/team.png',    // Image for "Our Team"
            imageAlt: 'Illustration of our team'
        }
    };

    // Update the content based on the clicked tab
    title.textContent = content[tabId].title;
    paragraph.textContent = content[tabId].paragraph;
    image.src = content[tabId].imageSrc; // Update image source
    image.alt = content[tabId].imageAlt; // Update image alt text

    // Remove active class from all buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));

    // Add active class to the clicked button
    event.currentTarget.classList.add('active');
}





document.getElementById('mobile-toggle').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    const toggleIcon = this.querySelector('i'); // Get the <i> element inside the toggle button

    // Toggle the visibility of the nav-links
    navLinks.classList.toggle('show');

    // Change the icon based on whether the menu is open or closed
    if (navLinks.classList.contains('show')) {
        toggleIcon.classList.remove('bi-list');
        toggleIcon.classList.add('bi-x'); // Switch to 'x' icon when menu is open
    } else {
        toggleIcon.classList.remove('bi-x');
        toggleIcon.classList.add('bi-list'); // Switch back to 'list' icon when menu is closed
    }
});




// Select all like buttons and dislike buttons
const likeButtons = document.querySelectorAll('.like-btn');
const dislikeButtons = document.querySelectorAll('.dislike-btn');

// Function to handle click events for likes
likeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const likeCount = this.querySelector('.like-count');
        let currentLikes = parseInt(likeCount.innerText);
        likeCount.innerText = currentLikes + 1 + " Likes"; // Increment likes
    });
});

// Function to handle click events for dislikes
dislikeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const dislikeCount = this.querySelector('.dislike-count');
        let currentDislikes = parseInt(dislikeCount.innerText);
        dislikeCount.innerText = currentDislikes + 1 + " Dislikes"; // Increment dislikes
    });
});

// Character counter for title and content fields
const titleInput = document.getElementById('discussion-title');
const titleCharCount = titleInput.nextElementSibling;
const contentInput = document.getElementById('discussion-content');
const contentCharCount = contentInput.nextElementSibling;

titleInput.addEventListener('input', () => {
    titleCharCount.textContent = `${titleInput.value.length} / 100 characters`;
});

contentInput.addEventListener('input', () => {
    contentCharCount.textContent = `${contentInput.value.length} / 5000 characters`;
});

// Cancel button to reset form
const cancelButton = document.querySelector('.cancel-btn');
cancelButton.addEventListener('click', () => {
    document.getElementById('discussion-form').reset();
    titleCharCount.textContent = '0 / 100 characters';
    contentCharCount.textContent = '0 / 5000 characters';
});

/// Multi step
var currentStep = 1;

function displayStep(stepNumber) {
    if (stepNumber >= 1 && stepNumber <= 3) {
        // Hide the current step and show the new step
        $(".step").hide();
        $(".step-" + stepNumber).show();
        
        // Update the progress bar and step indicator
        currentStep = stepNumber;
        updateProgressBar();
    }
}

$(document).ready(function() {
    // Initially hide all steps except for the first one
    $('#multi-step-form').find('.step').slice(1).hide();

    // Next button click event
    $(".next-step").click(function() {
        if (currentStep < 3) {
            $(".step-" + currentStep).addClass("animate__animated animate__fadeOutLeft");
            currentStep++;
            setTimeout(function() {
                $(".step").removeClass("animate__animated animate__fadeOutLeft").hide();
                $(".step-" + currentStep).show().addClass("animate__animated animate__fadeInRight");
                updateProgressBar();
            }, 500);
        }
    });

    // Previous button click event
    $(".prev-step").click(function() {
        if (currentStep > 1) {
            $(".step-" + currentStep).addClass("animate__animated animate__fadeOutRight");
            currentStep--;
            setTimeout(function() {
                $(".step").removeClass("animate__animated animate__fadeOutRight").hide();
                $(".step-" + currentStep).show().addClass("animate__animated animate__fadeInLeft");
                updateProgressBar();
            }, 500);
        }
    });

    // Function to update the progress bar and step circles
    function updateProgressBar() {
        var progressPercentage = ((currentStep - 1) / 2) * 100;
        $(".progress-bar").css("width", progressPercentage + "%");

        // Update step circle active state
        $(".step-circle").each(function(index) {
            if (index < currentStep) {
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });
    }

    // Initialize progress bar on page load
    updateProgressBar();
});
