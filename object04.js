// Ex 4 Object

let car = {
    brand : "Toyota",
    model : "Supra",
    year : 2019,

    start : function () {
        console.log("La voiture démarre.")
    },
    info : function () {
        return car.brand + " " + car.model + " de l'année " + car.year
    }
}

car.start()
console.log(car.info())