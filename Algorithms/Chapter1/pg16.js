
 // Setting and Swapping

 function setAndSwap(){
     var myName = 'Zach';
     var myNumber = 42;
     var temp = myNumber;

     myNumber = myName;
     myName = temp;

     console.log(myNumber, myName);
 }

 // Print and Count

 function printAndSwap(){

     var amount = 0;

     for( var i = 515; i>512; i+= 5 ){
         if( i < 4092){
             amount++;
             console.log(i, amount);
         }
     }
 }


 // Print -52 to 1066

 function printIntegers(){

     for ( var i = -52; i<1067; i++){
         console.log(i);
     }
 }

 // Multiples of Six

 function multipleOfSix(){
     var num = 6;
    while( num < 60000){
        console.log(num);
        num = num * 6;
    }
 }

 // Dont Worry, Be Happy

 function beCheerful(){
     for( var i = 1; i<99; i++){
         console.log('good morning!');
     }
 }

 // Counting, the Dojo Way

 function dojoCounting(){
     for( var i = 1; i<101; i++){
         if( i % 5 == 0 && i % 10 == 0){
             console.log('Coding Dojo');
         }
         else if( i % 5 == 0){
             console.log('Coding');
         }
         else{
             console.log(i);
         }
     }
 }

 // Multiples of Three - But Not All

 function multiplesOfThree(){

     for( var i = -300; i<=0; i+= 3){
         if( i == -6){
             continue;
         }
         else if( i == -3){
             continue;
         }
         else{
             console.log(i);
         }
     }
 }

 // What do you know

 function whatDoYouKnow(incoming){

     console.log(incoming);
 }

// Printing integers with While

function usingWhile(){

    var num = 2000;
    while( num < 5281){
        console.log(num);
        num++;
    }
}

// Whoa, That Sucker's Huge

function huge(){
    var sum = 0;
    for( var i = -300000; i<=300000; i++){
        if( i % 2 !== 0){
            sum = sum + i;
        }
    }
    console.log(sum);
}

// You Say It's Your Birthday

function birthday( day, month){
    if( day == 24 && month == 5 || day == 5 && month == 24){
        console.log("How did you know?");
    }
    else{
        console.log("Just another day...");
    }
}


// Countdown By Fours

function countdown(){
    var num = 2016;
    while( num > 0){
        console.log(num);
        num -= 4;
    }
}

countdown();
