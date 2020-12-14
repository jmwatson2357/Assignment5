
// Write your JavaScript code here!
alert("All fields are required.")
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

const form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    let pilot = document.querySelector("input[name=pilotName]");
    let cPilot = document.querySelector("input[name=coPilot");
    let fLevel = document.querySelector("input[name=fuelLevel]");
    let cMass = document.querySelector("input[name=cargoMass");
    let fItems = document.getElementById("faultyItems");
    let lStatus = document.getElementById("launchStatus");
    let pStatus = document.getElementById("pilotStatus");
    let cPStatus = document.getElementById("copilotStatus");
    let fStatus = document.getElementById("fuelStatus");
    let cStatus = document.getElementById("cargoStatus");
    if(fLevel.value < 10000){
        fItems.style.visibility = 'visible';
        lStatus.innerText = "Shuttle not ready for launch.";
        lStatus.style.color = "red";
        fStatus.innerText = "Fuel level too low for launch";
    }
    if(cMass.value > 10000){
        fItems.style.visibility = 'visible';
        lStatus.innerText = "Shuttle not ready for launch.";
        lStatus.style.color = "red";
        cStatus.innerText = "Cargo mass too high for launch"
    }
    if(fLevel.value >= 10000 && cMass.value <= 10000){
        fItems.style.visibility = 'visible';
        lStatus.innerText = "Shuttle is ready for launch.";
        lStatus.style.color = "green";
        fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
            response.json().then( function(json) {
                
            })
        })
    }
}) 

