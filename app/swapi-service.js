console.log(1);
function SwapiService() {
  console.log("MEEEE!!!!", 7);
  //private

  //public

  this.getPeople = function getPeople(url, cb) {
    if (typeof cb != "function") {
      return console.error("[getPeople] requires a callback", url, cb);
    }
    url = url || "https://swapi.co/api/people/";
    console.log(1);
    // @ts-ignore
    $.get(url).then(cb);
    console.log(2);
  };

  this.getPlanet = function getPlanet(url, cb, id) {
    if (typeof cb!= "function"){
      return console.error("[getPlanet] requires a callback", url, cb);
    }
    url = url || "https://swapi.co/api/planets/";
    $.get(url).then(function (data){
      cb(data, id)
    }
    )};
}
console.log(2);
