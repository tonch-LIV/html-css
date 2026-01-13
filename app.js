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
        const flavor = prompt("What kind of sauce do you preffer your accompany your food?", "Sweet? Spicy? Acidic? or other?");

        const tasty = document.getElementById("flavor");

        if (tasty) { // ensures the element exists
            if (flavor && flavor.trim() !== "") {
                tasty.textContent = `You like your food to be ${flavor}.`;
            } else {
                tasty.textContent = "Try something new!";
            }
        }
    };

entryQuestion();
sauceFlavor();
