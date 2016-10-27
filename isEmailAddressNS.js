"use strict";
/* global __imns */
/*jshint -W044 */
var adr = __imns('util.validation');
// var adr = window; //for stand-alone delete above and uncomment this line
if(!('isEmailAddress' in adr)){


    /**
        @method isEmailAddress
        @param {String} t
        @return {Boolean} true/false
        @description low-level validation for isEmailAddress
     */
    adr.isEmailAddress = function(t){
        if(typeof t !== 'string'){ return false; }
        if(t.length < 4){ return false; }
        var reg = "^([A-Za-z0-9\-\_]{1,63}\.)*[A-Za-z0-9\-\_]{1,63}@"; //name;
        reg += "((([0-9]{1,3}\.){3,5}[0-9]{1,3})|(([A-Za-z0-9\_\-]{1,63}\.)+([A-Za-z0-9\-\_]{1,63})))$"; //domain
        reg = new RegExp(reg);
        return reg.test(t); };


}
