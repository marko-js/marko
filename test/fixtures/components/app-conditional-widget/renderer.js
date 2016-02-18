var template = require('./template.marko');

module.exports = function(input, out) {    
    template.render(
        {
            includeWidget: input.includeWidget
        },
        out);

};