//Notes 3/6/18

$( document ).ready( function () {  

	var box = $("#myBox");
    var colorString = "rgb(";   
    
    // colorString = colorString + 
        //giveMeARandomNumber() + ' , ' + giveMeARandomNumber() + ' , ' + giveMeARandomNumber() + ') ';
    
    //set Interval is JS function to repeat
    
    var loopingColor = setInterval(function() {
        
        colorString = "rgb(";
        colorString = colorString + 
            giveMeARandomNumber() + ' , ' + giveMeARandomNumber() + ' , ' + giveMeARandomNumber() + ') ';
    
    console.log(colorString);
    
    box.css( "background-color", colorString);
}, 100);
    
   	 $("#buttonColor").click( function () {

// console.log(giveMeARandomNumber() );
//below makes button stop the loop.
         clearInterval(loopingColor);
// replace with .css function below, which does stuff to the box! to make it repeat, put colorString within click function. And give it a new reset colorString with the first line below -- leaving off "var" allows you to reset the variable to rgb(.

         colorString = "rgb(";
         colorString = colorString + 
             giveMeARandomNumber() + ' , ' + giveMeARandomNumber() + ' , ' + giveMeARandomNumber() + ') ';
    
         box.css( "background-color", colorString );
         
 	   });


});


function giveMeARandomNumber() {
    
    var number = Math.random() * 255;
    number= Math.floor(number);
    return number;
}














//$( document ).ready( function () {  
//
//	var box = $("#myBox");
//
//   	 $("#show").click( function () {
//
//  	      box.show(1000);   //# creates fade effect
//
// 	   });
//
//    $("#hide").click( function () {
//
//        box.hide(1000);
//
//        });
//
//});
