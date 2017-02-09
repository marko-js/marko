var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index.marko'), {
        name: 'Frank',
        $global: {
            name: 'Frank'
        }
    });

    var onCreateArgs = widget.onCreateArgs;
    var onCreateInput = onCreateArgs[0];
    var onCreateOut = onCreateArgs[1];

    expect(onCreateInput.name).to.equal('Frank');
    expect(onCreateOut.global.name).to.equal('Frank');
};