/* <<<<<<<<<<<<<<----------------------------------About variables---------------------------------->>>>>>>>>>>>>>> */
var x //global variable and undefined as it is not initialized.
console.log("value of x before initialization : ", x);
x = 15;
console.log("value of x : ", x);
var y = 89; //y is declared and initialized. '=' is assignment operator.
console.log("value of y : ", y);
x = y;
console.log("value of x : ", x);
let z = 25; //this variables can be used within scope it is declared
console.log("value of z before modification : ", z);
z = "sstring";
console.log("value of z after modification : ", z);
const pi = 3.14; //the value will remain constant and cannot be changed.
console.log("value of pi : ", pi,"\n");






/* <<<<<<<<<<<<<<----------------------------------operations on variables---------------------------------->>>>>>>>>>>>>>> */
var x = 5 + 7;
console.log("value of x : ", x);
x += 2; //addition
console.log("value of x : ", x);
var y = 89;
y = y - x; //substraction   //compound subs
console.log("value of y : ", y);
x--;//decrement
console.log("value of x : ", x);
y++;//incremet
console.log("value of y : ", y);
var p = 2 * 15; //multiplication
var P = 29 / 3; //division
console.log("value of p : ", p);
console.log("value of P : ", P,"\n");

//variable name are case sensitive






/* <<<<<<<<<<<<<<----------------------------------float value variable operations---------------------------------->>>>>>>>>>>>>>> */
var a = 0.66 * 3.33;
console.log("value of a: ", a);
var b = 5.76 / 2.1;
console.log("value of b: ", b);
var c = 16%5;
console.log("value of remainder: ", c,"\n");




/* <<<<<<<<<<<<<<----------------------------------Strings---------------------------------->>>>>>>>>>>>>>> */
var game = "Minecraft";
console.log("The value of game : ",game);
console.log("length of game :",game.length);
console.log(game[0]);            //first letter of string
console.log(game[5],"\n");       //n+1th element of string
console.log(game[game.length-1]);//last letter of string
console.log("We can use double quotes like \"Minecraft\"");
var game2 = "apple" + "tree"; //We can also use variables here.
console.log("The value of game2 : ", game2);
z += " is not a number";
console.log("value of z after: ", z,"\n");
//individual string char cannot be changed


/*
\' single quote
\" double quote
\\ backslash
\n new line
\r carriage return
\t tab
\b backslash
\f from feed
*/



/* <<<<<<<<<<<<<<----------------------------------Arrays---------------------------------->>>>>>>>>>>>>>> */
var arr1 = []; //empty array
var arr2 = [1, 234.56, "forge", false]; //1D array
var arr3 = [[1, 234.56, "forge", false], [7,8.9], [true, "lol", 101001]]; //multidimentional array
//datatype doesn't matter
console.log("array val:", arr1);
console.log("array val:", arr2[2]);
console.log("array val:", arr3[1]);

arr2[1] = ["changed", 1234];
console.log("array val:", arr2[1]);
console.log("array val:", arr2[1][0]);

arr2.push([true, 110, "banana"]);
console.log("array val:", arr2);
arr2.pop(); //removes the last element of array
console.log("array val:", arr2);

arr2.shift(); //remove the first element of array
console.log("array val:", arr2);
arr2.unshift(23); //insert element at 0 position
console.log("array val:", arr2,"\n");
//individual elements of arrays can be modified







/* <<<<<<<<<<<<<<----------------------------------User defined functions---------------------------------->>>>>>>>>>>>>>> */
function addition(a,b)
{return a+b;} 
var ans = addition(33,66);
console.log(ans,"\n");

var glob = 15;         //global variables
var common = 33;
function addby20(a){
    var local = 5;       //local variables
    var common = 40;
    if(typeof glob != "undefined")
        {console.log(a+glob+local);}
    console.log(common); // local value of the common variable
} //function
addby20(50);
console.log(common,"\n");







/* <<<<<<<<<<<<<<----------------------------------Conditional statments---------------------------------->>>>>>>>>>>>>>> */

// == equality check                                      8 == '8' or "8"  is true, performs type conversion
// === strict equality check(including datatype)          8 === '8'  is false, doesn't perform type conversion
// != inequality check                                    performs type conversion        
// !== strict inequality check                            doesn't perform type conversion


function even(a){  //if-else used to check conditions in code
    if(a%2!=0)
        return false;
    else
        return true;
}
console.log(even("hello"));
console.log(even(16));
console.log(even("16"));


function even2(a)  //switch case example 
{
    var number = a%2;
    switch(number)
    {
        case 1:
            return "odd";
            break;
        case 0:
            return "even";
            break;
        default:                        //when non of te above condition is satisfied then control comes here
            return "not valid input";
            break;
    }
} //if break is not used then a particular case excecutes everything below it
console.log(even2("minecraft"));
console.log(even2("20"));

// return undefined; is used to exit function in between [returns null value]

/* <<<<<<<<<<<<<<----------------------------------OBJECTS---------------------------------->>>>>>>>>>>>>>> */
var obj = {
    "name" : "Kanishk",
    "age" : 19,
    "occupation" : "student",
    "address" : "GNR",
    "favChar" : "Luffy",
    12 : "just example",
    "ar" : [1,2,3,4],
    "nest" : {
        "ob1" : 1,
        "ob2" : 2,
        "ob3" : 3
    }
};
console.log(obj.name);        //dot notation
console.log(obj["favChar"]);  //bracket notation
var tst = "age";
console.log(obj[tst]);        //call trhrough variable
//object properties can be updated using these notation

obj.game = "sekiro";          //add new property to object
console.log(obj["game"]);

// 'delete obj.occupation;'    to delete property from object
//objects are also use as key-value search pairs

console.log(obj.hasOwnProperty("ar"));  //checks if function has the property [boolean type in built function]

//bracket notations are commonly used when property name has space in it
//object properties can be another objects too.
console.log(obj.nest.ob1);  //caling nested object properties
console.log("\n");

/* <<<<<<<<<<<<<<----------------------------------LOOPS---------------------------------->>>>>>>>>>>>>>> */
var mar = [1,2,3,4,5];

var i=0;
while(i < 5)
{console.log(mar[i]);i++;}
// it can be even i+=num i*=num or even i-- i-=num i/=num in (backward count) 
for(var j = 0 ; j < 5 ; j++)
{console.log(mar[j]);}
// if-else nesting and loop nesting is also possible
// in do-while loop runs one time and then checks condition [runs at least on time]

/* 
array --> []
object --> {} 
*/
console.log("\n");


/* <<<<<<<<<<<<<<----------------------------------IN-BUILT FUNCTIONS---------------------------------->>>>>>>>>>>>>>> */
console.log(Math.random());    //generates random fraction >=0 <1  [but not 1]
console.log(Math.floor(Math.random()*100)); //generates random wole number >=0 <100  [but not 100]

var min = 5;
var max = 50;
console.log(Math.floor(Math.random()*(max-min+1))+min);  //generates random wole number >=5 <50  [but not 50] [in certain range]

console.log(parseInt("12"));          //convert string to int
console.log(parseInt("Twelve"));      // returns NaN
console.log(parseInt("101101101", 2));   //parseInt with base of number system

console.log(35%2 ? "odd" : "even");    //conditional (ternary) operator  [one line if-else]
console.log(-90>0 ? "positive" : -90<0 ? "negative" : "even");   //multiple ternary operators
console.log("\n");


/* <<<<<<<<<<<<<<----------------------------------VAR & LET & CONST---------------------------------->>>>>>>>>>>>>>> */
var dum = 12;
var dum = 14; //redeclaration
dum = 16; //assinment
//these all are valid for var
let dum2 = 12;
dum2 = 16; //assinment
//these all are valid for let [redeclaration is not valid]

const e = 2.718; //read-only variable
const arr = [1,2,3];
arr[0]=3;
arr[1]=1;
arr[2]=2;
//this is valid for const [mutation in const array]
//arr = [3,1,2] is not valid for const 

Object.freeze(obj); //object properties cannot be mutated


console.log("\n");