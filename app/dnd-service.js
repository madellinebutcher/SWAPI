function DndService(){
    var bcw = '//bcw-getter.herokuapp.com/?url='
    var baseUrl = 'http://www.dnd5eapi.co/api/'
  
  
  
  
  
  
    this.getCollection = function getCollection(collection, cb){
      $.get(bcw + baseUrl + collection)
          .then(data =>{
            var res = JSON.parse(data).results
            cb(res)
          })
    }
  
    this.getDetails = function getDetails(url, cb){
        $.get(bcw + url)
          .then(data =>{
            var res = JSON.parse(data)
            cb(res)
          })
    }
  
  }
