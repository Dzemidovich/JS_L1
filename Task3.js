function whatCentury(year) {  
    const century = Math.ceil(year / 100);  
    const suffix = (century % 10 === 1 && century % 100 !== 11) ? 'st' :  
                   (century % 10 === 2 && century % 100 !== 12) ? 'nd' :  
                   (century % 10 === 3 && century % 100 !== 13) ? 'rd' : 'th';  
    return ${century}${suffix};  
}  


console.log(whatCentury("1996"));  
console.log(whatCentury("2077"));  
console.log(whatCentury("21"));  
console.log(whatCentury("2259"));  
console.log(whatCentury("1101"));  
console.log(whatCentury("2000"));