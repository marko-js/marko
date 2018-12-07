var expect = require("chai").expect;

exports.templateData = {};

exports.checkError = function(e) {
    expect(Array.isArray(e.errors)).to.equal(true);
    expect(e.errors.length).to.equal(1);

    var message = e.toString();
    expect(message).to.contain("Invalid <aync-fragment> tag");
    expect(message).to.contain("Argument is missing");
    expect(message).to.contain(
        '<async-fragment data-provider=data.userInfo var="userInfo" />'
    );
};
