// Notes 030818 Prep for Grio competition

var myVariable = 10;

var name // don't use the word name

var first = 10, second = 200, third="test";


Number
String
Boolean true false
Array []
Objects {}


///

int number = 10.0; //error this is a float in an integer

float number2 = 10.00;

var number = NaN // it is considered a number in JS

undefined == null;  // true

0; //falsie, it is not undefined tho it represents null. 

var variable = undefined  // same as var variable;

null == undefiner // 'truthy'

0 == null; //Yes
null == 0  // 'truthy'

0 = '0' // truthy, kind of similar but Java is too forgiving and causes bugs

0 === '0' // check the type. falsy

"" // false bc nothing exists
"10" // true bc something exists. See if below

///

console.log("100 * 'Hello');
console.log("NaN is a " + type of NaN);

//code block
if ("10") { 

    console.log("yay");
    
}


for ( [counter] var i = 0 ; [test or fx] true == true or i < 10; [code to run] i++ or i + 10 ; ) // first number in vocab of numbers and access whole array

    
while ( [test] )
    
function myFunction([arguments, none to many])  {
    //if above is empty, can access the below fx to print with the phrase below
    console.log(arguments[0] + arguments[1]);
}
    
myFunction('Hello!', 2); // since it's filled w.params/'args' can be initialized by the word "arguments" above, if it's only one fx with params around. (JS book talks about diff bw arguments and parameters -- look online, in eduardo's email)


if ( myFunction() ) {
    
    console.log("I ran!");
}

[discussion on functions as variables, and multiple returns]

//to get the value of the selected elements
$("p").val();
//set the value of the selected elements
$("h1").val("this is the new text");
// Put a listener[for a click] on a button and run code when pressed.
$("colorButton").click(myFunction or function() {} --runs without needing to write another fx and stores in its own var); //can insert a fx)
    //---soo... 

function myFunction() {
    //run something
}