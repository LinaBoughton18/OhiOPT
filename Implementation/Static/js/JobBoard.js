function showJobContent(inJob) {
    // Turns inJob string into a readable object
    jsonString = inJob.replace(/'/g, '"');
    job = JSON.parse(jsonString);
    // Logs into the console
    console.log("I clicked job:" + job.jobTitle);
    // Creates a variable called jobContentDiv,
    // then links that variable to "contentByJob" id in the relavent page
    var jobContentDiv = document.getElementById("contentByJob");
    // Sets jobContentDiv's inner stuff(?) to relevant job info
    jobContentDiv.innerHTML = "<h1 class='headerText'>" + job.jobTitle + "</h1><br>"
    jobContentDiv.innerHTML += "<span class='emphasisGenericText'> Location: </span>" + "<span class='genericText'>" + job.location + "</span><br><br>"
    jobContentDiv.innerHTML += "<span class='emphasisGenericText'> Pay:</span> $" + "<span class='genericText'>" + job.pay + " per hour </span><br><br>"
    jobContentDiv.innerHTML += `<input type="button" onclick="alert('You applied!')" value="Apply Here!">`
}

// Not in use
function filterJobs() {
    console.log("Job filter called");
    var fieldFilter = document.getElementById("fieldDropdown")
    var fieldValue = fieldFilter.value;
    console.log(fieldValue);

    var maybeJobs = JSON.parse('{{jobs | tojson}}');
    console.log(maybeJobs[0])
}

var jobsJSONarr
function convertJobsToJSON() {
    jobHolder = document.getElementById("jobsVarHolder")
    data = jobHolder.getAttribute("value")
    data = data.substring(1, data.length-1).replaceAll("'",'"')
    array = data.split(", {")
    jobsJSONarr = [JSON.parse(array[0])]
    for (i = 1; i<array.length; i++) {
        array[i] = "{"+array[i]
        jobsJSONarr.push(JSON.parse(array[i]))
    }
}

function sort() {
    var field = document.getElementById("fieldDropdown").value
    var location = document.getElementById("locationDropdown").value
    var pay = document.getElementById("payDropdown").value
    console.log(field)
    console.log(location)
    console.log(pay)
    filteredJobs = []
    jobsJSONarr.forEach(element => {
        checksum = 0
        // look I know full well theres a better way to do this
        // this was good for debugging tho so idk what to tell you
        if (element.location == location || location == "None"){
            checksum += 1
            //console.log("match on location: " + element.location + ", " + location)
        }
        if (element.field == field || field == "None"){
            checksum += 1
            //console.log("match on field: " + element.field + ", " + field)
        }
        if (element.pay == parseInt(pay) || pay == "None"){
            checksum += 1
            //console.log("match on pay: " + element.pay + ", " + pay)
        }
        if (checksum == 3){
            filteredJobs.push(element.jobTitle)
        }
    });
    // we actually only care about the job names
    // actually do the filtering
    jobs = document.getElementsByName("jobItem")
    console.log(typeof filteredJobs)
    jobs.forEach(element => {
        element.style.visibility = "visible"
    });
    jobs.forEach(element => {
        jobName = element.textContent
        if (!filteredJobs.includes(jobName)){
            element.style.visibility = "hidden"
        }
    });
}

window.onload = convertJobsToJSON