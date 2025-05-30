// Lina copied from Guarnera's sample code
// Detects 'keydown' events (automatically goes on every page!)
window.addEventListener('keydown', function(event) {
    // Outputs key pressed into the console
    console.log("KeyDown: " + event.code);
    // Creates variable called msgSpan
    // Links msgSpan to "say" id on the page
    var msgSpan = document.getElementById("say");
    // Initializes new variable, text, to msgSpan's value
    var text = msgSpan.innerHTML;

    // Responds to keydown events by editing text
    // adding letters, backspacing, etc.
    switch(event.code) {
        case "Backspace":
            text = text.slice(0, text.length - 1);
            break;
        case "ShiftRight":
            break;
        case "ShiftLeft":
            break;
        case "Enter":
            text = ""
            break;
        default:
            text += event.key;
    }

    // Sets the new msgSpan content to the new text
    msgSpan.innerHTML = text
});

//#region REFERENCES FROM DUCK PAGE
// Lina copied from Guarnera's sample code

// When clicked
function quack() {
    // Logs into the console
    console.log("I clicked the duck!");
    // Creates a variable called noiseDiv,
    // then links that variable to "duck-noise" id in the relavent page
    var noiseDiv = document.getElementById("duck-noise");
    // Sets noiseDiv's inner stuff(?) to "QUACK!"
    noiseDiv.innerHTML = "QUACK!";
}

function scritch() {
    console.log("Mouseover");
    // Creates a variable called touchDiv
    // Links touchDiv to anything with the touch-duck id
    var touchDiv = document.getElementById("touch-duck");
    touchDiv.innerHTML = "SCRITCH";
}

function scratch() {
    console.log("Mouseout");
    var touchDiv = document.getElementById("touch-duck");
    touchDiv.innerHTML = "SCRATCH";
}

//#endregion

//#region CREATE CUSTOM TIMELINE


/*
window.addEventListener('click', function() {
    // Grabs the graduation date by its elementId
    // & then takes its value attribute (which all input types have)
    var gradDate = new Date(this.document.getElementById('gradDate').value);
    gradDate.setDate(gradDate.getDate() + 1);

    // querySelector somehow selects the proper radio button
    var stemButtonSelected = document.querySelector('input[name="StemNotStem"]:checked');

    // Calculates the proper dates & outputs them into the timeline
    calculateDates(gradDate, stemButtonSelected);
});
*/

function generateTimeline() {
    var gradData = document.getElementById("gradDate")
    alert(toString(gradData))
    var gradDate = new Date(gradData)
    var startDate = new Date(gradDate.getDate-90)
    var endDate = new Date(gradDate.getDate+60)
    // alert("graduation: " + toString(gradDate) + " :: " + "start: " + toString(startDate) + " :: " + "end: " + toString(endDate))
}

/*
// Hides & shows elements in the nav bar based on if the user is logged in
function hideNavBarOptions() {
    document.getElementById("navbarGooseTimeButton").style.display = "none";
    
    if (!{{loggedIn}}) {
        console.log(":(");
        document.getElementById("navbarUserProfileButton").style.display.visibility = "hidden";
        document.getElementById("navbarSavedJobsButton").style.display.visibility = "hidden";
    }
    else {
        console.log(":)");
        document.getElementById("navbarUserProfileButton").style.display = "visbile";
        document.getElementById("navbarSavedJobsButton").style.display = "visible";
    }
}

window.addEventListener('click', function() {
    hideNavBarOptions();
});
*/