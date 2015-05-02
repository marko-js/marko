var makeClass = require('raptor-util').makeClass;

module.exports = makeClass({
    $init: function(name) {
        this.name = name;
        this.type = null;
        this.required = false;
        this.type = 'string';
        this.allowExpressions = true;
        this.setFlag = null;
    }
});