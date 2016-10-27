"use strict";
describe("isEmailAddress Test Suite", function(){
    var __imns = function(){ return window; };
    it("isEmailAddress is a function", function(){ expect(typeof isEmailAddress === 'function').toBe(true); });
    it("Suite Test: e@immaturedawn.co.uk = true", function(){ expect(isEmailAddress('e@immaturedawn.co.uk')).toBe(true); });
    it("Suite Test: {Number} 1234.1 = false", function(){ expect(isEmailAddress(1234.1)).toBe(false); });
    it("Suite Test: {String} 1234.1 = false", function(){ expect(isEmailAddress('1234.1')).toBe(false); });
    it("Suite Test: {Object} = false", function(){ 
        var t = {};
        expect(isEmailAddress(t)).toBe(false); });
    it("Sute Test: {String} noat = false", function(){ expect(isEmailAddress('noat')).toBe(false); });
    it("Suite Test: {String} @nofirst = false", function(){ expect(isEmailAddress('@nofirst')).toBe(false); });
    it("Suite Test: {String} first@.domain = false", function(){ expect(isEmailAddress('first@.domain')).toBe(false); });
    it("Suite Test: {String} \"first surname\"@domain.cc.gg = false", function(){ expect(isEmailAddress('"first surname"@domain.cc.gg')).toBe(false); });
    it("Suite Test: {String} first@domain.cc. = false", function(){ expect(isEmailAddress('first@domain.cc.')).toBe(false); });
    it("Suite Test: {String} first@domain = true", function(){ expect(isEmailAddress('first@domain')).toBe(true); });
    it("Suite Test: {String} first@domain.gg = true", function(){ expect(isEmailAddress('first@domain.gg')).toBe(true); });
    it("Suite Test: {String} first.surname@domain.cc.gg = true", function(){ expect(isEmailAddress('first.surname@domain.cc.gg')).toBe(true); });
    it("Suite Test: {String} first.surname@sub.domain.cc.gg = true", function(){ expect(isEmailAddress('first.surname@sub.domain.cc.gg')).toBe(true); });
    it("Suite Test: {String} first@192.168.1.1 = true", function(){ expect(isEmailAddress('first@192.168.1.1')).toBe(true); });
    it("Suite Test: {String} first@192.168.1.1.1.1 = true", function(){ expect(isEmailAddress('first@192.168.1.1.1.1')).toBe(true); });
    it("Suite Test: {String} first@sub.sub.sub.sub.domain.cc.gg = true", function(){ expect(isEmailAddress('first@sub.sub.sub.sub.domain.cc.gg')).toBe(true); });
});
