var expect = require("chai").expect;

it("should handle ending </script> tag", function(done) {
    var ready = require("marko/ready");

    ready(function() {
        expect(window.fooWidget.state.evil).to.equal(
            '</script><script>alert("hello")</script>'
        );
        expect(window.fooWidget.widgetConfig.evil).to.equal(
            '</script><script>alert("hello")</script>'
        );
        done();
    });
});
