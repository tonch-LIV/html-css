'use strict'
// comment

/*
also
a
comment
*/
const flavor = prompt("What kind of sauce do you preffer your accompany your food?", "Sweet? Spicy? Acidic? or other?");

const tasty = document.getElementById("flavor");

if (flavor && flavor.trim() !== "") {
    tasty.textContent = `You like your food to be ${flavor}`;
} else {
    tasty.textContent = "Try something new";
}
// if (confirm("Do you like flavor in your life?")) {
//  document.write("Welcome to FlavorTown!");
// } else {
//  document.write("My condolences... ):");
// // }
// let name = prompt("what kind of sauce do you preffer to accompany your plate?:", "Sweet? Spicy? Acidic?");
// document.write("You preffer ", name, " sauces with your food.");