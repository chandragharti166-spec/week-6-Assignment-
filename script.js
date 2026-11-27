
/* ========================================
   WEEK 10: JS BASICS & CONTROL FLOW
   STUDENT: CHANDRA GHARTI
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



/* PART 2: AGE AND DAYS LIVED */

let birthYear = Number(prompt("What year were you born?"));

let currentYear = new Date().getFullYear();


if (
    Number.isInteger(birthYear) &&
    birthYear > 0 &&
    birthYear <= currentYear
) {

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

} else {

    console.log("Please enter a valid birth year.");

}



/* ========================================
   WEEK 11: DARK MODE TOGGLE
======================================== */


// Step 1: Select the theme button

const themeButton = document.querySelector("#theme-toggle");


// Step 2: Add a click event

if (themeButton) {

    themeButton.addEventListener("click", function() {

        // Switch between dark and normal mode

        document.body.classList.toggle("dark-mode");


        // Update button text

        if (document.body.classList.contains("dark-mode")) {

            themeButton.textContent = "Light Mode";

        } else {

            themeButton.textContent = "Toggle Dark Mode";

        }

    });

}



/* ========================================
   WEEK 12: ARRAYS AND LOOPS
   HOBBY LIST
======================================== */


// Step 1: Create an array of hobbies

const hobbies = [

    "Photography",

    "Playing Football",

    "Traveling",

    "Exploring Technology",

    "Creating Digital Content"

];


// Step 2: Select the hobby container

const hobbyList = document.querySelector("#hobby-list");


// Step 3: Create an unordered list

if (hobbyList) {

    const ul = document.createElement("ul");


    // Step 4: Use a for loop to display hobbies

    for (let i = 0; i < hobbies.length; i++) {

        const li = document.createElement("li");

        li.textContent = hobbies[i];

        ul.appendChild(li);

    }


    // Step 5: Display the list on the webpage

    hobbyList.appendChild(ul);

}



/* ========================================
   WEEK 12: FIVE-PHOTO GALLERY
======================================== */


// Step 1: Create an array of five image URLs

const photos = [

    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1000",

    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1000",

    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1000",

    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1000",

    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1000"

];


// Step 2: Select gallery elements

const galleryImage = document.querySelector("#gallery-image");

const photoCounter = document.querySelector("#photo-counter");

const nextButton = document.querySelector("#next-photo");


// Step 3: Start with the first photo

let currentIndex = 0;


// Step 4: Create a function to display photos

function showPhoto() {

    galleryImage.src = photos[currentIndex];

    galleryImage.alt = "Gallery photo " + (currentIndex + 1);

    photoCounter.textContent =
        "Photo " + (currentIndex + 1) +
        " of " + photos.length;

}


// Step 5: Display the first photo

if (galleryImage && photoCounter && photos.length > 0) {

    showPhoto();


    // Step 6: Add Next Photo functionality

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
