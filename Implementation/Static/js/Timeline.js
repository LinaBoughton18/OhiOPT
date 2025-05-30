function generateTimeline() {
    var dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    var local = "en-us"
    var gradData = Date.parse(document.getElementById("gradDateField").value)
    var gradDate = new Date(gradData+86400000).toLocaleDateString(local,dateOptions)
    //gradDate.setDate(gradDate.getDate() + 1)
    // those numbers are 90 days and 60 days in ms because we dont have real date objects until after I fix it smile
    var startDate = new Date(gradData-7776000000).toLocaleDateString(local,dateOptions)
    var endDate = new Date(gradData+5184000000).toLocaleDateString(local,dateOptions)
    updateTextSections(startDate,gradDate,endDate)
}

function updateTextSections(startDate, gradDate, endDate){
    document.getElementById("startTime").textContent = startDate
    document.getElementById("gradTime").textContent = gradDate
    document.getElementById("endTime"). textContent = endDate
}