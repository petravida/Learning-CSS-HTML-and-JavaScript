//alert("Error!");


/*var isPremiumUser = false;

if(isPremiumUser == true){
  console.log("Thanks for being a loyal customer!")
}
else{
  console.log("You should subscribe to our premium service.")
}


var myAge = 5;
if(myAge < 1){
  console.log("You are a baby.")
}
else if (myAge < 3) {
  console.log("You are a toddler.")
}
else if (myAge < 10) {
  console.log("You are a big kid.")
}
else if (myAge <=19) {
  console.log("You are a teenager.")
}
else if (myAge < 40) {
  console.log("You are an adult.")
}
else {
  console.log("You must be old, you are not in our records.")
}*/




/*for (var i = 0; i < 10; i++){
  console.log("Current i value is", i);
}*/



/*function myFunction(){
  console.log("My name is Petra.")
}

myFunction();


function printName(name){
  console.log("Hello,", name);
}

printName("Petra");*/



/*function buttonClicked(){
  console.log("Button clicked.");
}*/

/*var btn = document.getElementById("go-button");
function buttonClicked(){
  console.log("Button clicked.");
  btn.removeEventListener("click", buttonClicked);
  document.getElementById("text").innersHTML = "Do not do it.";
}
btn.addEventListener("click", buttonClicked);*/





/*var hobbies = ["pizza", "gaming", "reading", "programming", "music"];
console.log(hobbies);

console.log("I no longer enjoy", hobbies.pop());

hobbies.push("archery");*/


/*hobbies.forEach(function(item, index) {
  console.log("I like", item, index);
});
console.log(hobbies.shift());
hobbies.unshift("blacksmithing");*/


/*var btn = document.getElementById("go-button1")

function buttonClicked(){
  console.log("Button clicked.");
  var customText = document.getElementsByClassName("my-input");
  var textArea = document.getElementsByClassName("my-textarea");
  var result = document.getElementById("text");
  //console.log(customText);
  result.innerHTML = "Hello, " + customText[0].value + "<br/>";
  result.innerHTML += "Message: " + textArea[0].value;

}

btn.addEventListener("click", buttonClicked);*/




/*function saySomething(fraza){
  console.log("You said: " + fraza)
}
function getDuljina(fraza){
  var l = fraza.length;
  return l;
}
var thisLength = getDuljina("Ovo je jedna jako duga rečenica.");
console.log(thisLength);*/



class Animal{

  cosntructor(name, height, weight){
    console.log("Created animal named", name);
    this.name = name;
    this.height = height;
    this.weight = weight;
  }
  nameLenght(){
    return this.name.lenght;
  }
}
Animal.plenet = "Earth";
var dog = new Animal("Beni", 25, 90);
var fish = new Animal("Bea", 10, 10);
console.log(dog.nameLenght);
console.log(fish.cosntructor.planet);
