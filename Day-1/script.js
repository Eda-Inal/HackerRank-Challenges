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
    


if(N % 2 == 0 && 2<=N && N<=5 || N>20){
    console.log("Not Weird")
}
 if( (N % 2 !==0) || (N % 2 ==0) && N>=6 && N<= 20 ){
    console.log("Weird")
}

    
}
