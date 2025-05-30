function startPage() {
    var logStatus = getLoginState()
    // flask gives a string saying "True" or "False"
    // instead of a boolean
    // because god hates me
    if (logStatus == "True") {
        logStatus = true
    } else {
        logStatus = false
    }
    setLoginSpecificBehavior(logStatus)
}

function setLoginSpecificBehavior(logStatus){
    // this snippet sets "page" to be whatever the current page is
    // the "page" is just whatever is after the last "/" on the url
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if (logStatus) {
        console.log("logged In")
        // buttons specified here will be removed if logged out
        document.getElementById("logIn").remove()
        document.getElementById("createProfile").remove()

        // if you want more specificity (i.e. only remove the button
        // when youre logged in and on page xyz) use nested Ifs


        if (page != ""){ // note: pathless is the home page
            // this re-enables the options on the sidebar which
            // are only visible when logged in
            // these are slightly different than buttons because theyre
            // made visibile as opposed to being removed so just keep that
            // in mind I guess. :thumbs_up_emoji:
            visLogElements = document.getElementsByClassName("visLoggedIn")
            for (let item of visLogElements) {
                item.style.visibility = "visible"
            }
        }

    } else {
        // if you want buttons which are removed when the user
        // is logged out, place them here
        console.log("logged Out")
        document.getElementById("logOut").remove()
    }
    // GENERAL
    // if you want it to only run on specific pages but you
    // dont care about login status, put the removals here
    // youll need more if statements checking for page tho
    if (page != "editProfile") {
        document.getElementById("saveChanges").remove()
    }
    if (page == "editProfile") {
        document.getElementById("logOut").remove()
    }
    if (page != "userProfile") {
        document.getElementById("editProfile").remove()
    }
    if (page == "logIn") {
        document.getElementById("logIn").remove()
    }
    if (page == "createProfile") {
        document.getElementById("createProfile").remove()
    }
}

function getLoginState(){
    var varHolder = document.getElementById("LoginCheck")
    var logStatus = varHolder.getAttribute("value")
    return logStatus
}

//window.onload = startPage
