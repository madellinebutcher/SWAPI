console.log(3);
function SwapiController() {
  console.log(6);
  var swService = new SwapiService();
  console.log(8);
  //private

  function drawPeople(people) {
    var template = "";
    people.forEach(person => {
      
      template += `
        <h5>${person.name}</h5>
        <div id="${person.name}">
        <button onclick="app.controllers.swapiController.getPlanet('${person.homeworld}', '${person.name}')">VISIT PLANET</button>
        </div>
        `;
    });
    document.getElementById("sw-people").innerHTML = template;
  }

  function drawPlanet(planets, id) {
    var template = '';
    template = `<h1>${planets.name}</h1>`
    
    document.getElementById(id).innerHTML = template;
  }

  function drawButtons(res) {
    var template = ''
    if(res.previous){
      template += `<button onclick="app.controllers.swapiController.getPeople('${res.previous}')">Previous</button>`
    }
    if(res.next){
      template += `<button onclick="app.controllers.swapiController.getPeople('${res.next}')">Next</button>`
    }
    document.getElementById('buttons').innerHTML = template
  }

  function handlePeopleResponse(res) {
    drawButtons(res);
    drawPeople(res.results);
  }

  function handlePeopleResponsePlanet(res, id) {
    drawPlanet(res, id);
  }

  //public
  this.getPeople = function(url) {
    swService.getPeople(url, handlePeopleResponse);
  };

  this.getPlanet = function(url, id){
    swService.getPlanet(url, handlePeopleResponsePlanet, id)
  }
}
console.log(4);
