function PokemonService(){
    var bcw = '//bcw-getter.herokuapp.com/?url='
    var baseUrl = 'http://pokeapi.co/api/v2/'

    this.getPokedex = function getPokedex(pokedex, cb){
        $.get(bcw + baseUrl + pokedex)
            .then(data => {
                var res = data.results
                cb(res)
            })
    }
    
    this.getDescriptions = function getDescriptions(url, cb){
        $.get(bcw + url)
        .then(data =>{
            var res = data.results
            cb(res)
        })
    }




}