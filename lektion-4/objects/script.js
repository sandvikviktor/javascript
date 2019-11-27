$(function () {

    const object = {};
    const objectArray = [];

    const person = {
        firstName: 'Viktor',
        lastName: 'Sandvik',
        fullName: function () {
            return this.firstName + ' ' + this.lastName
        },
        address: {
            street: 'Pilgatan 2',
            zipcode: 12345,
            city: 'Västerås',
            fullAdress: function() {
                return `${this.street}, ${this.zipcode}, ${this.city}`
            }
        },
        phoneNumbers: [
            '073-123 12 12',
            '070-123 12 31'
        ],
        emailAdress: 'viktor@domain.com'

    }

    // document.write(person.firstName);
    // document.write(person.lastName);
    // document.write(person.address.fullAdress())

  
    //Gör om till json objekt innan det skickas vidare till databas
    let json = JSON.stringify(person);
    document.write(json);

    //Hämta info från json objekt till javascript objekt
    let javascriptObj = JSON.parse(json);
    document.write(javascriptObj.firstName);



})