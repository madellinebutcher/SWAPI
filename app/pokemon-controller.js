function PokemonController() {
    //private
    var pokemonService = new PokemonService();

    function drawPokemon(pokemons) {
        var template = "<ul>";
        for (let i = 0; i < pokemons.length; i++) {
            var pokemon = pokemons[i];
            template += `
            <li onclick="app.controllers.pokemonController.getDescriptions('${pokemon.url}')">${pokemon.name}</li>
            `
        }
        template += "</ul>"
        document.getElementById("pokemon-data").innerHTML = template;
    }

    function drawDescriptions(des){
        var template = `
          <h3>Order: ${des.order}</h3>
          <h3>Stats: ${des.stats}</h3>
          <h3>Types: ${des.types}</h3>
        `
        document.getElementById('pokemon-active-data').innerHTML = template
      }

    this.getDescriptions = function getDescriptions(url){
        pokemonService.getDescriptions(url, drawDescriptions)
    }



}