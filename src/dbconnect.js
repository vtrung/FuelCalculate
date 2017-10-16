var DBConnect = {
    getYears: function(){
        //get year from mongo
    },
    getMakes: function(year){
        //get all makes from a year
    },
    getModels: function(year, make){
        //get all models from year and make
    },
    getTypes: function(year, make, model){
        //get all types from year and make
    },
    getCarById: function(id){
        // get car object by id
    }
}

module.exports = DBConnect;