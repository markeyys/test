document.write("<hr>");
document.write("Hello World Wide Web");
document.write("<hr>");

//confirm("Are you ok");
//prompt("How are you", "28");

//alert("Text to be displayed");


//Q1: Check if user is sure or not with code below
/*var answer=confirm("Are you sure?");

if (answer===true){
    alert("True");
}else{
    alert ("False");
}*/

//Q2
/*
var a=prompt("What is your student id number?");

if (a!=undefined){
    prompt ("How old are you", a);
}
else{
    alert("null");
} */

/*
var x = "hello", y;

alert("Variable x value is " + typeof x );
alert("Variable y value is " + typeof y );
alert("Variable x value is " + typeof z );
*/

/*
var Car2 = new Array("Ford", "Toyota", "Honda");
for (var variable in Car2){
    alert("hi");
} */


//var obj = new Object();  // Creating an object

// Adding three properties to obj

//for in loop
/*
obj.prop1 = 123;
obj.prop2 = "456";
obj["prop3"] = true;    // same as obj.prop3 = true

var keys = "", values = "";
for (var p in obj) {
  keys += p + " ";
  values += obj[p] + " ";
}

alert(keys);
// Show "prop1 prop2 pro3 "

alert(values);
// Show "123 456 true "
*/

//function foo(p1){
//    if (typeof(p1)=="number"){
//        alert ("0");
//    }
//    else if (typeof(p1)=="string"){
//        alert("zero");
//    }
//}
//foo(0);
//foo("abc");

//creating a function without a parameter
//function sum(){
//    var s=0;
//    for (var i=0; i<arguments.length;i++)
//        s+=arguments[i];
//    
//        alert (s);
//}
//
//sum(1, 2, 3);		// returns 6

//eval(alert(3+4));

//Object Oriented Programming

//var ahmad=new Object();
//ahmad.firstname="mustafa";
//ahmad.lastname="Abdula";
//ahmad.haircolor="black";


//var ahmad={
//    get:function mymethod(){
//        return this.val;
//      
//    },
//    val: 42
//}

//document.getElementById("demo").innerHTML=ahmad.firstname+ahmad.lastname+"hair is"+ahmad.haircolor;

//function warnUser(){
//    var x=document.getElementById("demo").innerHTML=ahmad.firstname+ahmad.lastname;
//    return x;
//}

//document.getElementById("clickhere").addEventListener("click",displaydate);
//
////date conversion method
//function displaydate(){
//document.getElementById("demo").innerHTML=new Date().toLocaleString('en-US', { timeZone: 'Asia/Singapore' });
//}


 
    // Replace this line with the one on your Quickstart Guide Page
Parse.initialize("LjLmZTrZ2hPEj8GssHm7vJpEtpUuyXOUnH7FY5Qn", "I8an8de0oE1uOShkAnekqhCG9jYtkivN4Lxhg0Ag");
 
var Item = Parse.Object.extend("Item");
var query = new Parse.Query(Item);
query.equalTo("name","Earphones");
query.find({
  success: function (results) {
  alert("Successfully retrieved " + results.length + " scores.");
    // Do something with the returned Parse.Object values
    for (var i = 0; i < results.length; i++) { 
      var object = results[i];
      document.getElementById("demo").innerHTML=(object.id + ' - ' + object.get('price'));
    }
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});

var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
TestObject.set("foo",lim);

TestObject.save(null, {
sucess: function(TestObject){
    TestObject.set("foo",yo);
    TestObject.save();
}
    
});





