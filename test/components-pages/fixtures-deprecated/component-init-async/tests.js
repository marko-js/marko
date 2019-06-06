var path = require("path");
var expect = require("chai").expect;

describe(path.basename(__dirname), function() {
    it("should allow attributes to not be updated", function() {
        function testHelloComponent(name) {
            var helloComponent = window[name];
            expect(helloComponent !== undefined).to.equal(true);
            expect(helloComponent.el.innerHTML).to.contain(
                "Hello from " + name + "!"
            );
        }

        testHelloComponent("hello1");
        testHelloComponent("hello2");
        testHelloComponent("hello3");
    });
});
