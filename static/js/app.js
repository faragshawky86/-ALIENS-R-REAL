// from data.js
var tableData = data;

// YOUR CODE HERE!

//Lets find the find button
var findDataButton = d3.select("#filter-btn");
//Lets get the input field on the screen 
var inputField = d3.select("#datetime")
//Lets create and event listener for the find data button 
findDataButton.on("click",function(){

    //Stop the page from refreshing
    d3.event.preventDefault();
    //Lets get the date the user entered
    var userEnteredDate = inputField.property("value");

    var searchResult = filterData(userEnteredDate);
    displayResults(searchResult)
})

function filterData (dateFilter){
    return data.filter(record => record.datetime == dateFilter)
}

function displayResults (searchResult){
    //Lets find the html table body
    var tbody = d3.select("tbody");
    searchResult.forEach(record => {
        var row = tbody.append("tr");
        var cell = row.append("td");
        cell.text(record["datetime"])
        var cell = row.append("td");
        cell.text(record["city"]);
        var cell = row.append("td");
        cell.text(record["state"]);
        var cell = row.append("td");
        cell.text(record["country"]);
        var cell = row.append("td");
        cell.text(record["shape"]);
        var cell = row.append("td");
        cell.text(record["durationMinutes"]);
        var cell = row.append("td");
        cell.text(record["comments"]);

    });
}