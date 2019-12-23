var Vector3 = require("./Vector3");

module.exports = class Marker{
    constructor() {
        this.name = '';
        this.id = ''
        //could cause bugs, supposed to be a triple of floats
        this.position = new Vector3();
    }
}

