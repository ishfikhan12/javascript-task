function isPalindrome(str) {
   
    const lowerStr = str.toLowerCase();
    
    let left = 0;
    let right = lowerStr.length - 1;
    
    
    while (left < right) {
      
        if (!isAlphanumeric(lowerStr[left])) {
            left++;
            continue;
        }
        
        if (!isAlphanumeric(lowerStr[right])) {
            right--;
            continue;
        }
        
        if (lowerStr[left] !== lowerStr[right]) {
            return false;
        }
            
        left++;
        right--;
    }
        
    return true;
}

function isAlphanumeric(char) {
    return /[a-z0-9]/.test(char);
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); 
console.log(isPalindrome("race a car")); 
console.log(isPalindrome("Was it a car or a cat I saw?")); 
console.log(isPalindrome("No 'x' in Nixon")); 





// function findMinMax(numbers) {
//     if (numbers.length === 0) {
//         return { min: undefined, max: undefined }; 
//     }
    
//     let min = numbers[0];
//     let max = numbers[0]; 

    
//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] < min) {
//             min = numbers[i]; 
//         }
//         if (numbers[i] > max) {
//             max = numbers[i]; 
//         }
//     }
    
//     return { min, max }; 
// }


// console.log(findMinMax([3, 1, 8, 4, 10, 5])); 
// console.log(findMinMax([-1, 0, 100, 20, 5, -10])); 
// console.log(findMinMax([5])); 
// console.log(findMinMax([])); 


// function findMissingNumber(numbers) {
    
//     if (numbers.length === 0) {
//         return null; 
//     }

    
//     numbers.sort((a, b) => a - b);

//     for (let i = 0; i < numbers.length - 1; i++) {
//         if (numbers[i + 1] !== numbers[i] + 1) {
          
//             return numbers[i] + 1;
//         }
//     }

//     return null; 
// }
// let numbers1 = [11, 12, 14, 15, 16, 18, 19, 20];
// console.log("Missing number:", findMissingNumber(numbers1)); 

// let numbers2 = [1, 2, 3, 4, 5, 6, 8, 9, 10];
// console.log("Missing number:", findMissingNumber(numbers2)); 

// let numbers3 = [-2, 0, 1, 2, 3, 4, 6];
// console.log("Missing number:", findMissingNumber(numbers3)); 

// let numbers4 = [];
// console.log("Missing number:", findMissingNumber(numbers4)); 

// let numbers5 = [1, 2, 3, 4, 5, 6];
// console.log("Missing number:", findMissingNumber(numbers5)); 
