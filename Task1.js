function hasTwoCubeSums(n) {  
    const cubes = {};  
    
  
    for (let a = 1; a < Math.cbrt(n); a++) {  
        for (let b = a + 1; b < Math.cbrt(n); b++) {  
            const sum = a  3 + b  3;  
            if (sum > n) continue;  
            
            if (sum === n) {  
                if (cubes[sum]) {  
                    const [x1, y1] = cubes[sum];  
                    
                    if (x1 !== a && x1 !== b && y1 !== a && y1 !== b) {  
                        return true;   
                    }  
                } else {  
                    cubes[sum] = [a, b];
                }  
            }  
        }  
    }  
    
    return false; 
}  

  
console.log(hasTwoCubeSums(1729)); 
console.log(hasTwoCubeSums(100))