******************************DAY0**********************************
    function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

    // Write a line of code that prints parameterVariable to stdout using console.log:
    console.log(parameterVariable)
}



****************************DAY1 *****************************
/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/
function getArea(length, width) {
    let area;
    // Write your code here
    area = length * width;
    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter = 2 * (length + width);
    return perimeter;
}

********************DAY 1 Functions ******************************
/*
 * Create the function factorial here
 */ 
    /******** METHOD 1 *******/

function factorial(n){
    if(n>1){
          return n* factorial(n-1)
    } 
   else if(n==1){
       return 1;
   }
      
      
  }
    

factorial(4)

/******** METHOD 2 *******/

    function factorial(n){
    if(n>1){
         let carpma = 1
          for(let i = 1; i <= n ; i++){
             carpma = carpma * i
            
          }
          return carpma
    } 
   else if(n==1){
       return 1;
   }
      
      
  }
    

factorial(4)




********************DAY 2: Conditional Statements: Switch-********************





  switch(s[0]){
    case ('a' || 'e' || 'i' || 'o' || 'u'):
        return 'A';
        break;
       
        case ('b' || 'c' || 'd' || 'f' || 'g'):
        return 'B';
        break;

        case ('h' || 'j' || 'k' || 'l' || 'm'):
        return 'C';
        break;

        case ('z' || 'n' || 'p' || 'q' || 'r' || 's' || 't' || 'v' || 'w' || 'x' || 'y'):
        return 'D';
        break;
  }



******************************DAY 3: Intro to Conditional Statements***********************
function main() {
    const N = parseInt(readLine().trim(), 10);
    


if(N % 2 !==0  ){
    console.log("Weird")
}
if(N % 2 == 0 && N>20){
    console.log("Not Weird")
} else if(N%2 ==0 && N >=2 && N<=5){
    console.log("Not Weird")
}
if(N %2 == 0 && N>=6 && N<=20){
    console.log("Weird")
}

    
}

********************Day 3: Arrays*************************
    
    //Method 1 :
    
    function getSecondLargest(nums) {
    // Complete the function
    nums.sort(function(a, b){return a - b}); // [2,3,5,6,6] 
    
    let uniquenums = [...new Set(nums)]; // new Set ayn?? olan de??erleri ay??kl??yor. yeni dizi nums  = [2,3,5,6]
    return uniquenums[uniquenums.length -2] // b??y??kten k????????e s??ralasayd??k indexi[1] olarak al??rd??k
    
    
}


// Method2:

let unique = []
function getSecondLargest(nums) {
    // Complete the function
    
     nums.sort(function(a, b){return b-a}); // bu sefer b??y??kten k????????e s??raland??
     for(let i = 0; i<nums.length; i++){ 
        if( !(unique.includes(nums[i]))){ // tek tek dizi de??erleri i??eriyor mu diye bak??ld??. dizinin i??eri??i bo??tu o y??zden eklendiler ama ayn?? de??erden sadece 1 i eklenebildi
            unique.push(nums[i]);  //i??erisinde olmayan de??erler pushland??. yani 6 de??eri 2.kez yeni diziye aktar??lmad??
    } 
    
    }return unique[1] 
    }
    


