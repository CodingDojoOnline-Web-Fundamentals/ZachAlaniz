
 // Print all integers from 1 to 255

function printTo255(){

    for ( var i = 1; i<256; i++){
        console.log(i);
    }
}

 // Print all odd integers from 1 to 255.

 function printOdd(){

     for( var i = 1; i<256; i++){
         if( i % 2 !== 0){
             console.log(i);
         }
     }
 }

 // Print integers from 0 to 255, and with each integer print the sum so far.

    function printSum(){

        var sum = 0;

        for( var i = 0; i<256; i++){
            console.log(i);
            sum = sum + i;
            console.log(sum);
        }
    }

  // Iterate through a given array, printing each value.

  function printArr(arr){

      for( var i = 0; i<arr.length; i++){
          console.log(arr[i]);
      }
  }

  // Given an array, find and print its largest element.

  function printMax(arr){

      var max = arr[0];
      for ( var i = 0; i<arr.length; i++){
          if( max < arr[i]){
              max = arr[i];
          }
      }
      console.log(max);
  }

  // Analyze an array’s values and print the average.

  function average(arr){
      var sum = 0;

      for( var i = 0; i<arr.length; i++ ){
          sum = sum + arr[i];
      }

      var avg = sum / arr.length;
      console.log(avg);
  }

  // Create an array with all the odd integers between 1 and 255 (inclusive).

  function avgArray(){

      var arr = [];

      for( var i = 0; i<256; i++){
          if( i % 2 !== 0){
              arr.push(i);
          }
      }
      return arr;
  }

  // Square each value in a given array, returning that same array with changed values.

  function squared(arr){

      for( var i = 0; i<arr.length; i++){
          arr[i] = arr[i] * arr[i];
      }
      return arr;
  }

  // Given an array and a value Y, count and print the number of array values greater than Y.

  function greaterY(arr, Y) {

    var count = 0;

    for( var i = 0; i<arr.length; i++){
        if( arr[i] > Y){
            count++;
        }
    }
    console.log(count);
 }

 // Return the given array, after setting any negative values to zero.

 function negatives(arr){

     for( var i = 0; i<arr.length; i++){
         if( arr[i] < 0){
             arr[i] = 0;
         }
     }
     return arr;
 }

 // Given an array, print the max, min and average values for that array.

 function maxMinAvg(arr) {

    var maximum = arr[0];
    var minimum = arr[0];
    var sum = 0;

    for( var i = 0; i<arr.length; i++){
        if( maximum < arr[i]){
            maximum = arr[i];
        }
         if( minimum > arr[i]){
            minimum = arr[i];
        }
        sum+= arr[i];
    }

    var avg = sum / arr.length;
    var newarr = [maximum, minimum, avg];
    return newarr;
 }

 // Given an array, move all values forward by one index, dropping the first and leaving a '0' value at the end.

 function moveVals(arr){
     var endVal = 0;
     arr.shift();
     arr.push(endVal);
     return arr;
 }

 // Given an array of numbers, replace any negative values with the string 'Dojo'.

 function replaceNegatives(arr){

     for ( var i = 0; i<arr.length; i++){
         if( arr[i] < 0){
             arr[i] = 'Dojo';
         }

     }
     return arr;
 }
