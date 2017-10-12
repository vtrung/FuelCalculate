
var Utility = {
        formatCurrency: function(num){
            if(isNaN(num))
                return num;
            if(num > 0){
                return "$"+ num.toPrecision(3);
            } else if(num < 0) {
                var temp = Math.abs(num);
                return "-$"+ temp.toPrecision(3);
            }
            return "$0";
        }
}

module.exports = Utility;