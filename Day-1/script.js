******************DAY0****************
    function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

    // Write a line of code that prints parameterVariable to stdout using console.log:
    console.log(parameterVariable)
}



********************DAY1********************
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


***************Day 3: Intro to Conditional Statements************
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
