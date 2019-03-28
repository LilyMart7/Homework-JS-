/*var dog = {
    name: "Bobik",
    breed:  "taxa",
    age: 2,
    ShowInfo: function (){
        console.log("Name: " + this.name + ", " + "Breed: " + this.breed + ", " + "Age: " + this.age);
        console.log(` Name: ${this.name}, Breed: ${this.breed}, Age: ${this.age} `);
    }
}

dog.ShowInfo();*/

/*dog.name = "Bobik";
dog.breed = "taxa";
dog.age = 2;

dog.ShowInfo();*/

//=============================================================================================

function dog(name, breed, age){
    this.name = name;
    this.breed =  breed;
    this.age = age;
    this.ShowInfo = function(){
        console.log(` Name: ${this.name}, Breed: ${this.breed}, Age: ${this.age} `);  
    }
};

var Tuzik = new dog("Tuzik ", "taxa ", 2);
var Bobik = new dog("Bobik ", "doberman ", 5);
var Sharik = new dog("Sharik ", "doberman ", 5);

Tuzik.ShowInfo();
Bobik.ShowInfo();
Sharik.ShowInfo();


var dogArr = [];
dogArr.push({Tuzik});
dogArr.push({Bobik});
dogArr.push({Sharik});

console.log(dogArr);

dogArr.forEach(function(item, index){
    console.log(` ${item} ${index}`)
});

/*console.log(Tuzik);
console.log(Bobik);
console.log(Sharik);*/

//==========================================================

/*Tuzik.name = "Tuzik";
Tuzik.breed = "taxa";
Tuzik.age = 3;

Tuzik.ShowInfo();

var Bobik = new dog();

Bobik.name = "Bobik";
Bobik.breed = "doberman";
Bobik.age = 3;

Bobik.ShowInfo();

var Sharik = new dog();

Sharik.name = "Sharik";
Sharik.breed = "labrador";
Sharik.age = 5;

Sharik.ShowInfo();

var dogArr = [Tuzik, Bobik, Sharik];

console.log(dogArr);*/

//==============================================================

/*var dog = {
    name: "",
    breed: "",
    age: null,
    ShowInfo: function (){
        
        console.log(` Name: ${this.name}, Breed: ${this.breed}, Age: ${this.age} `);
    }
}

var arr = [];

var tmpDog = Dog;
tmpDog.name = "Sharik";
tmpDog.breed = "labrador";
tmpDog.age = 5;

arr.push(tempDog);

*/
