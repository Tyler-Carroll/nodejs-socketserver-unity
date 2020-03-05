var Vector3 = require("./Vector3");
var shortID = require('shortid');

module.exports = class Marker{
    constructor() {
        this.name = '';
        //could cause bugs, supposed to be a triple of floats
        this.position = new Vector3();
        this.rotation = new Quaternion();
    }
}

