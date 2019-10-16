/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. the result you receive when "this" has no context
 * 2. the object before the . is "this" when calling a function
 * 3. returns a specific instance used by a constructor function
 * 4. this defined by .call or .apply
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

let windowFunction = function() {
  console.log(this);
};

windowFunction();

// Principle 2

// code example for Implicit Binding

const Person = {
  name: name,
  greeting: "hello",
  sayName: function(name) {
    console.log(`${this.greeting} ${name}`);
  }
};

Person.sayName("Kai");

// Principle 3

// code example for New Binding

function friendlyPeople(person) {
  this.greeting = "Morning   ";
  this.person = person;
  this.speak = function() {
    console.log(this.greeting + this.person);
    console.log(this);
  };
}

const personA = new friendlyPeople("Person A");
const personB = new friendlyPeople("Person B");

personA.speak();
personB.speak();

// Principle 4

// code example for Explicit Binding

function cell() {
  console.log(this.ringtone);
}

let phone = {
  name: "Samsung S8",
  ringtone: "morning glory"
};

cell.call(phone); //invoking the function here
