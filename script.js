
/* ========================================
   WEEK 10: JS BASICS & CONTROL FLOW
   Student: Chandra Gharti
======================================== */

/* PART 1: TIME-BASED GREETING */

let userName = prompt("What is your name?");

let currentHour = new Date().getHours();

if (currentHour < 12) {
    console.log("Good morning, " + userName + "!");
} else if (currentHour < 18) {
    console.log("Good afternoon, " + userName + "!");
} else {
    console.log("Good evening, " + userName + "!");
}


/* PART 2: AGE AND DAYS LIVED VERIFICATION */

let birthYear = Number(prompt("What year were you born?"));

let currentYear = new Date().getFullYear();

let age = currentYear - birthYear;

let daysLived = age * 365;

console.log(
    "You have lived for approximately " + daysLived + " days!"
);

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}


/* ========================================
   WEEK 11: DOM & DYNAMIC EVENT HANDLING
   DARK MODE TOGGLE
======================================== */

let themeButton = document.querySelector("#theme-toggle");

if (themeButton) {
    themeButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });
}


/* ========================================
   WEEK 12: ARRAYS AND LOOPS
   HOBBY LIST
======================================== */

// Step 1: Create an array of hobbies

let hobbies = [
    "Photography",
    "Playing Football",
    "Traveling",
    "Exploring Technology",
    "Creating Digital Content"
];

// Step 2: Select the hobby list container

let hobbyList = document.querySelector("#hobby-list");

// Step 3: Create a list

if (hobbyList) {

    let ul = document.createElement("ul");

    // Step 4: Use a for loop to display every hobby

    for (let i = 0; i < hobbies.length; i++) {

        let li = document.createElement("li");

        li.textContent = hobbies[i];

        ul.appendChild(li);
    }

    // Step 5: Add the list to the webpage

    hobbyList.appendChild(ul);
}


/* ========================================
   WEEK 12: IMAGE GALLERY
======================================== */

// Step 1: Store five image URLs in an array

let photos = [
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1000",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1000",
    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1000",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1000",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1000"
];

// Step 2: Select gallery elements

let galleryImage = document.querySelector("#gallery-image");
let photoCounter = document.querySelector("#photo-counter");
let nextButton = document.querySelector("#next-photo");

// Step 3: Start with the first photo

let currentIndex = 0;

// Step 4: Create a function to display a photo

function showPhoto() {

    if (!galleryImage || !photoCounter) {
        return;
    }

    galleryImage.src = photos[currentIndex];

    galleryImage.alt = "Gallery photo " + (currentIndex + 1);

    photoCounter.textContent =
        "Photo " + (currentIndex + 1) + " of " + photos.length;
}

// Step 5: Display the first photo

if (galleryImage && photoCounter && photos.length > 0) {

    showPhoto();

    // Step 6: Move to the next photo when clicked

    if (nextButton) {

        nextButton.addEventListener("click", function() {

            currentIndex++;

            // Return to the first photo after the last photo

            if (currentIndex >= photos.length) {
                currentIndex = 0;
            }

            showPhoto();
        });
    }
}
