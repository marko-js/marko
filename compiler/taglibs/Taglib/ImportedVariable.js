var makeClass = require('raptor-util').makeClass;

module.exports = makeClass({
    $init: function() {
        this.targetProperty = null;
        this.expression = null;
    }
});