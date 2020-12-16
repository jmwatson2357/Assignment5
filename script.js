
// Write your JavaScript code here!

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
async function planet() {
    try{
        const res = await fetch("https://handlers.education.launchcode.org/static/planets.json");
        const data = await res.json();
        let targetDiv = document.getElementById("missionTarget");
        let index = Math.floor(Math.random()*data.length);
        targetDiv.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
                <li>Name: ${data[index].name}</li>
                <li>Diameter: ${data[index].diameter}</li>
                <li>Star: ${data[index].star}</li>
                <li>Distance from Earth: ${data[index].distance}</li>
                <li>Number of Moons: ${data[index].moons}</li>
            </ol>
            <img src="${data[index].image}">
        // `
    } catch(err){
        console.log(err);
    }
};

const form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    let pilot = document.querySelector("input[name=pilotName]");
    let cPilot = document.querySelector("input[name=copilotName");
    let fLevel = document.querySelector("input[name=fuelLevel]");
    let cMass = document.querySelector("input[name=cargoMass");
    let fItems = document.getElementById("faultyItems");
    let lStatus = document.getElementById("launchStatus");
    let pStatus = document.getElementById("pilotStatus");
    let cPStatus = document.getElementById("copilotStatus");
    let fStatus = document.getElementById("fuelStatus");
    let cStatus = document.getElementById("cargoStatus");
    if(pilot.value === undefined || cPilot.value === undefined || fLevel.value === undefined || cMass.value === undefined){
        alert("All field are required!");
    } else {
        if(isNaN(fLevel.value) || isNaN(cMass.value)){
            alert("Please enter a number for fuel level and cargo mass.")
        } else {
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
                pStatus.innerText = `Pilot ${pilot.value} is ready for launch`;
                cPStatus.innerText = `Co-Pilot ${cPilot.value} is ready for launch`;
                planet();
                }
        }
    }
    
    
}) 
