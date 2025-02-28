function longest(arr, n) {  
    const sortedArr = arr  
        .map((str, index) => ({ str, index }))  
        .sort((a, b) => {  
            if (b.str.length === a.str.length) {  
                return a.index - b.index;  
            }  
            return b.str.length - a.str.length; 
        })  
        .map(item => item.str); 

    return sortedArr[n - 1] || "";  
}  

 
const arr = ["Hello", "World", "Codewars", "Katas"];  
const n = 3;  
console.log(longest(arr, n)); 