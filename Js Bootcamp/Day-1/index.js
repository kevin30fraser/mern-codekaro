                                      //Assignment -1 (Array)

let fruits=["apple","banana","orange"];
console.log(fruits);

// Remove the First Fruit From the Array

fruits.splice(0,1);
console.log(fruits);

// Add Grape to the End of The Array

fruits.push("grape");
console.log(fruits);

// Update the second Fruit From the Array to Pear

/*way One:
fruits[1]="Pear"
console.log(fruits);*/



// Way Two
fruits.splice(1,1,"Pear");
console.log(fruits);

                                     // Assignment Two (Object)//

// Objective : Practice adding,removing,updating values in objects//


// Create a object named "Person" and add the Following Items As mentioned//
let person={
    name:"John",
    age:30,
    city:"New York"
}

console.log(person);

//Delete the "age" from the object//
delete person.age;
console.log(person);

// Add new property Called "Job" and Mention "engineer"//

person.job="Engineer";
console.log(person);

// Update the city from "NewYork" To "San Fransisco" in the object//

person.city="San Fransisco";
console.log(person);


                                        // Assignment- 3(Array Of Object)

    // Add three car object named "car" array. and add the Following Items As mentioned//
let cars=[];
cars["make"]="Toyato";
cars["model"]="Camry";
cars["year"]="2018";
console.log(cars);

// Remove The first car object From the cars array//

delete cars["make"];
console.log(cars);

// Add a new car object to the "cars" array with following properties//

cars["make"]="Honda";
console.log(cars);

// Update the model property of the second car object in the array to "Accord"

cars["model"]="Accord";
console.log(cars);











