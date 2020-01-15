var Vector3 = require("./Vector3");
var shortID = require('shortid');

module.exports = class Marker{
    constructor() {
        this.name = '';
        this.id = shortID.generate();
        //could cause bugs, supposed to be a triple of floats
        this.position = new Vector3();
    }
}

