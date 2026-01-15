'use strict'
// comment

// This runs when the page has finished loading; (was for used "window.onload" delay type element.)
    function entryQuestion() {
            // show confirm dialog pop-up with a question
        let likesFlavor = confirm("Do you like flavor in your life?");

        if (likesFlavor) {
            // user clicked OK (Yes)
            alert("Welcome to FlavorTown!");
        } else {
            // user clicked Cancel (No)
            alert("My condolences... )':");
        }
    };

    function sauceFlavor() {
 // second prompt, interactive question with dynamic changes based on user text input
        const flavor = prompt("What kind of sauce do you prefer to accompany your food?", "Sweet? Spicy? Mild? or other?");

        const tasty = document.getElementById("flavor");

        if (tasty) { // output from user input
            if (flavor && flavor.trim() !== "") {
                tasty.textContent = `You like your food ${flavor}.`;
            } else { // output if user presses cancel on prompt, "bypassing text input"
                tasty.textContent = "Don't be afraid to try something new!";
            }

            // Changes background color based on answer
            let borderColor;
            const choice = flavor ? flavor.toLowerCase().trim() : "";

            if (choice === "sweet") {
            borderColor = "#0000e6";     // sweet → blue
            } else if (choice === "spicy") {
            borderColor = "crimson";    // spicy → reddish color
            } else if (choice === "mild") {
            borderColor = "green";   // mild → green
            } else {
            borderColor = "#5c5c8a";     // other →  neutral color
            }
            // Apply the border color to the element
            tasty.style.borderColor = borderColor; // change style property dynamically :contentReference[oaicite:1]{index=1}
        }
    };

entryQuestion();
sauceFlavor();
