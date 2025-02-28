function primeFactors(n) {  
    const factors = [];  
    for (let i = 2; i <= n; i++) {  
        let count = 0;  
        while (n % i === 0) {  
            n /= i;  
            count++;  
        }  
        if (count > 0) {  
            factors.push(`(${i}${count > 1 ? `**${count}` : ""})`);  
        }  
    }  
    return factors.join('');  
}