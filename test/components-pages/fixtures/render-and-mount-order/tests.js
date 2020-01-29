var expect = require("chai").expect;

it("should render top down, mount bottom up", function() {
    expect(window.renders).to.eql(["wrapper", "hello", "inner"]);
    expect(window.mounts).to.eql(["inner", "hello", "wrapper"]);
});
