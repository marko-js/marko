'use strict';
module.exports = {
    process: function (input, context) {
        var dependenciesParent = input.dependenciesParent;
        if (!dependenciesParent) {
            throw new Error('Expected property "dependenciesParent"');
        }
        delete input.dependenciesParent;
        dependenciesParent.addDependency(input);
    }
};