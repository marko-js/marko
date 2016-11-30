'use strict';

class Attribute {
    constructor(name) {
        this.name = name;
        this.type = null;
        this.required = false;
        this.type = null;
        this.allowExpressions = true;
        this.setFlag = null;
        this.pattern = null;
    }
}

module.exports = Attribute;