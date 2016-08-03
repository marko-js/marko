exports.check = function(marko, markoCompiler, expect, done) {

    var defineRenderer = require('../../../../defineRenderer');
    var renderer = defineRenderer({
        template: require('./template.marko'),
        getTemplateData: function(input) {
            return {
                fullName: input.firstName + ' ' + input.lastName
            };
        }
    });

    var renderResult = renderer.render({ firstName: 'John', lastName: 'Doe' });
    expect(renderResult.html).to.equal('<div>Hello John Doe!</div>');
    done();
};