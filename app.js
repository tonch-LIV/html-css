'use strict'
// comment

// This runs when the page has finished loading
    function entryQuestion() {
            // show confirm dialog with a question
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
 // second prompt, intteractive question
        const flavor = prompt("What kind of sauce do you prefer to accompany your food?", "Sweet? Spicy? Mild? or other?");

        const tasty = document.getElementById("flavor");

        if (tasty) { // ensures the element exists
            if (flavor && flavor.trim() !== "") {
                tasty.textContent = `You like your food ${flavor}.`;
            } else {
                tasty.textContent = "Don't be afraid to try something new!";
            }

            // Changes background color based on answer
            let borderColor;
            const choice = flavor ? flavor.toLowerCase().trim() : "";

            if (choice === "sweet") {
            borderColor = "#0000e6";     // e.g., sweet → light pink
            } else if (choice === "spicy") {
            borderColor = "crimson";    // spicy → a reddish color
            } else if (choice === "mild") {
            borderColor = "green";   // mild → yellowish
            } else {
            borderColor = "#5c5c8a";     // other → default neutral color
            }
            // Apply the background color to the element
            tasty.style.borderColor = borderColor; // change style property dynamically :contentReference[oaicite:1]{index=1}
        }
    };

entryQuestion();
sauceFlavor();
