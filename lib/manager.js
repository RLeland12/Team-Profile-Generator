const employee = require ("./employee");

class manager extends employee {
    constructor (name, id, email, officeNumber){
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole(){
        return "manager";
    }

    getofficeNumber(){
        return this.officeNumber;
    }
}

module.exports = manager;