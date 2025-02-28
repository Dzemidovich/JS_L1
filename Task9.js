function solution(str) {  
    return Array.from({ length: Math.ceil(str.length / 2) }, (_, i) =>   
        str.slice(i * 2, i * 2 + 2).padEnd(2, '_')  
    );  
}  

console.log(solution('abc'));      
console.log(solution('abcdef'));  
console.log(solution(''));         
console.log(solution('a'));  