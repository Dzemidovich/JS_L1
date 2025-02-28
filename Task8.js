function expandedForm(num) {  
    let numStr = num.toString();  
    let result = [];  

    for (let i = 0; i < numStr.length; i++) {  
        let currentDigit = numStr[i];  
        let placeValue = Math.pow(10, numStr.length - 1 - i);  
        
        if (currentDigit !== '0') {  
            result.push(currentDigit * placeValue);  
        }  
    }  
    
    return result.join(' + ');  
}  

console.log(expandedForm(12));      
console.log(expandedForm(45));        
console.log(expandedForm(70304));  