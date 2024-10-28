// Ex 2 Object

let user = {
    firstname : "Ben",
    lastname : "Mar",
    age : 28,
    greet : function () {
        return "Bonjour, je m'appelle "+ this.lastname + " " + this.firstname;
    }
};

console.log(user.greet())