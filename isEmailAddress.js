"use strict";
/*jshint -W044 */
/**
    @method isEmailAddress
    @param {String} t
    @return {Boolean} true/false
    @description low-level validation for isEmailAddress
 */
function isEmailAddress(t){
    if(typeof t !== 'string'){ return false; }
    if(t.length < 4){ return false; }
    var reg = "^([A-Za-z0-9\-\_]{1,63}\.)*[A-Za-z0-9\-\_]{1,63}@"; //name;
    reg += "((([0-9]{1,3}\.){3,5}[0-9]{1,3})|(([A-Za-z0-9\_\-]{1,63}\.)+([A-Za-z0-9\-\_]{1,63})))$"; //domain
    reg = new RegExp(reg);
    return reg.test(t); }
