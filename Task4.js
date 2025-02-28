function findMissing(sequence) {  
    const n = sequence.length;  
    const commonDiff = (sequence[n - 1] - sequence[0]) / n;   
    
    for (let i = 1; i < n; i++) {  
        if (sequence[i] - sequence[i - 1] !== commonDiff) {  
            return sequence[i - 1] + commonDiff;  
        }  
    }  
}  

console.log(findMissing([1, 3, 5, 9, 11])); 

console.log(findMissing([1, 3, 5, 9, 11])); 