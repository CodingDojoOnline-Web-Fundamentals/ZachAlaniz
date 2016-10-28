
 // Countdown

 function countdown(input){
     var arr = [];
     for( input; input>=0; input--){
         arr.push(input);
     }
     console.log(arr.length);
     return arr;
 }

 // Print and Return

 function printReturn(arr){
     console.log(arr[0]);
     return arr[1];
 }

// First plus length
// If first value is a String, the arr length is added on to the end of the String.
// If first value is a boolean, the function jusr returns the array length.

function firstPlusLength(arr){
    var sum = arr[0] + arr.length;
    return sum;
}

 // Values Greater than Second

 function greaterThan(){
     var arr = [1,3,5,7,9,13];
     var count = 0;
     for( var i = 0; i<arr.length; i++){
         if( arr[i] > arr[1]){
             console.log(arr[i]);
             count++;
         }
     }
     return count;
 }

// Values Greater than Second, Generalized

function generalized(arr){
    var newarr = [];
    if( arr.length < 2 ){
        console.log("This array is not long enough");
    }
    else{
        for( var i = 0; i<arr.length; i++){
            if( arr[i] > arr[1]){
                newarr.push(arr[i]);
            }
        }
        return newarr;
    }
}

// This length, That Value

function thisThat(num1, num2){

    var newarr = [];

    for( var i =0; i<num1; i++){
        newarr.push(num2);
    }
    if( num1 == num2){
        console.log('Jinx!');
    }
    return newarr;

}

 // Fit the First Value

 function fitTheFirst(arr){
     if( arr[0] > arr.length){
         console.log('Too Big!');
     }
     else if( arr[0] < arr.length){
         console.log('Too Small!');
     }
     else{
         console.log('Just Right!');
     }
 }

 // Farenheit to Celsius
 // Celsius = 5(Fahrenheit - 32)/9

 function fahrenheitToCelsius(fDegrees){
     var celsius = (5*(fDegrees - 32))/9;
      console.log(celsius);
     return celsius;
 }

// Celsius to Fahrenheit

function celsiusToFahrenheit(cDegrees){
    var fahren = ((9/5) + cDegrees) + 32;
    return fahren;
}
