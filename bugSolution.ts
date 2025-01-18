function greeter(person: string) {
    return "Hello, " + person;
}

function greeterArray(people: string[]) {
  return people.map(person => `Hello, ${person}`);
}

let user = ["Jane Doe", "John Smith"];

console.log(greeterArray(user)); //Correctly handles an array of strings

let singleUser = "Jane Doe";
console.log(greeter(singleUser)); //Correctly handles a single string