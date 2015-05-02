var makeClass = require('raptor-util').makeClass;

module.exports = makeClass({
    $init: function() {
        this.name = null;
        this.type = 'string';
        this.value = undefined;
    }
});