function greeter(person: string) {
    return "Hello, " + person;
}

let user = ["Jane Doe", "John Smith"];

console.log(greeter(user)); //This will throw an error because the function expects a string, not an array of strings