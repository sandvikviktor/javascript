$(function() {

//OBJECTS - används när vi bara behöver skapa ett objekt
const jsObj = {};

//OBJECTS - kan ha olika properties i sig, samt funktioner
const obj = {
    firstName: 'Viktor',
    lastName: 'Sandvik'
}


//CLASSES - används när vi vill skapa flera objekt av samma typ/mall
class JsClass {}

//CLASSES - class är egentligen bara en genväg för prototypen av constructor
class ProductClass {
    constructor() {
        this.sku = sku
        this.name = name
        this.description = description
        this.price = 0
        this.tax = 0
    }
    totalPrice() {
        return this.price + this.tax
    }
}

//PROTOTYPE - så här ser en klass ut i grund och botten i JS
function ProductPrototype() {
    this.sku = sku
    this.name = name
    this.description = description
    this.price = 0
    this.tax = 0
    this.totalPrice = function() {
        return this.price + this.tax
    }
}

let product1 = new ProductClass()
let product2 = new ProductPrototype()



//EXTENDS - arv något ärver från en huvudklass
//Lägger till funktionalitet som bara finns för (Computer) i klassen (ProductClass)
class Computer extends ProductClass {
    constructor(specification) {
        super();
        this.specification = specification
    }
}

let computer1 = new Computer()








})