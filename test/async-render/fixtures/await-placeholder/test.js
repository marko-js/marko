var expect = require('chai').expect;

exports.templateData = {
    testDataProvider: function (done) {
        setTimeout(function () {
            done(null, { name: 'Frank' });
        }, 200);
    }
};

exports.checkHtml = function (html) {
    expect(html).to.contain('Loading main...');
    expect(html).to.contain('Hello Frank');
};