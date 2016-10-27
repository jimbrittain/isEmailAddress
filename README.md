# Javascript isEmailAddress function
isEmailAddress attempts to determine if a supplied string is an email address. This tests as per specification for email addresses, not those found in the wild but as yet no edge cases discovered.
## Usage
```
    var e = ;
    isEmailAddress('enquiries@immaturedawn.co.uk') === true
    e = ''
    isEmailAddres('enquiries@.com') === false
```

## Methodology
```
    function isEmailAddress(t){
        if(typeof t !== 'string'){ return false; }
        if(t.length < 4){ return false; }
        var reg = "^([A-Za-z0-9\-\_]{1,63}\.)*[A-Za-z0-9\-\_]{1,63}@"; //name;
        reg += "((([0-9]{1,3}\.){3,5}[0-9]{1,3})|(([A-Za-z0-9\_\-]{1,63}\.)+([A-Za-z0-9\-\_]{1,63})))$"; //domain
        reg = new RegExp(reg);
        return reg.test(t); }
```

## Issues

* Is not stringent regarding IP Address lengths
* Needs proper testing log, e.g. browser checks
* NS version uses IMNS, not currently using ES6 namespacing
