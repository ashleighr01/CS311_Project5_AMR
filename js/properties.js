
let person = document.getElementById("person");
let adjective = document.getElementById("adjective");
let number = document.getElementById("number");
let country = document.getElementById("country");
let food = document.getElementById("food");
let time = document.getElementById("time");
let adjective2 = document.getElementById("adjective2");
let animal = document.getElementById("animal");
let anName = document.getElementById("aName");
let verb = document.getElementById("verb");
let verb2 = document.getElementById("verb2");
let pluralNoun = document.getElementById("pNoun");
let complete = document.getElementById("reveal");

/**
 * create function is attached to the Show MadLib button on the page. The function is supposed to
 * hide the prompt that users fill out, reveal their story, and offer the chance to reset.
 * 
 * NOTE: many of the responses continuously come back "undefined" with no resolution in sight.
 * Plus, once the "Show MadLib" button is pressed, it has to be submitted a second time to reveal the story.
 * Very confused on that portion.
 */

function create(){
    const entry = document.getElementById("form");
    entry.style.display = 'none'; 
    const reveal = document.getElementById("reveal");
    reveal.style.display = 'block';
    
    const show = document.getElementById("show");
    show.addEventListener("click", event => {
        let newStory = "Meet " + person.value + ", the leader of the " + adjective.value + " kingdom. ";
        newStory += number.value + " years ago, " + country.value + " fought the kingdom for the control of " + food.value + ". ";
        newStory += "The war raged on for 23 " + time.value + " until a " + adjective2.value + " soldier with a strong " + animal.value + " sidekick named " + anName.value + ". ";
        newStory += "The sidekick could " + verb.value + " with the best of the soldiers. ";
        newStory += "The sidekick has five statutes around the kingdom and is the leader's personal life guide. ";
        newStory += "As the sidekick's legend " + verb2.value + " through the kingdom, " + pluralNoun.value + " was also spreading.";

        complete.innerHTML = newStory;
    })
}

/**
 * newInput function is attached to the "reset" button to allow users the chance to create another story,
 * clear out their original responses, hide the story, and bring the form back.
 * 
 * NOTE: current responses are not clearing with the the "reset" button.
 */
function newInput() {
    const form = document.getElementById("form");
    form.style.display = 'block';
    const reveal = document.getElementById("reveal");
    reveal.style.display = 'none';

    const newAttempt = document.getElementById("reset");
    newAttempt.addEventListener("click", event => {
        form.value = "";
        
    })
}
