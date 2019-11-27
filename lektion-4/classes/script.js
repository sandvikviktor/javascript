$(function(){

    // OBJECT - kan vara helt olika, ställer till problem

    const object1 = {
        firstName: 'Object 1',
        lastName: 'Object 1',
    }

    const object2 = {
        first: 'Object 2',
        last: 'Object 2',
    }



    // CLASS = Model
    // är en gemensam standard på hur ett objekt ska se ut

    // function person(firstname, lastname) {
    //     this.firstName = firstname
    //     this.lastName = lastname
    //     this.fullName = function() {
    //         return this.firstName + ' ' + this.lastName
    //     }
    // }

    // let p1 = new person('Viktor', 'Sandvik')
    // document.write(p1.fullName())



    class Person {
        constructor(firstname, lastname) {
            this.firstName = firstname;
            this.lastName = lastname;
            // this.fullName = function() {
            //     return this.firstName + ' ' + this.lastName
            // }
            this.fullName = this.firstName + ' ' + this.lastName
        }

        greetings() {
            return `Welcome ${this.fullName}.`
        }
    }

    let user1 = new Person('Viktor', 'Sandvik')
    // document.writeln(user1.fullName);
    document.write(user1.greetings());

});