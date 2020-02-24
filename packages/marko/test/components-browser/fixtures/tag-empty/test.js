const expect = require("chai").expect;

module.exports = function(helpers) {
    function check(tag, isFirst) {
        if (!isFirst) {
            component.input = { comp: tag };
            component.update();
        }
        const openTag = tag ? `<${tag}>` : "";
        const closeTag = tag ? `</${tag}>` : "";
        expect(helpers.targetEl.innerHTML).to.contain(
            `<div>${openTag}${innerHTML}${closeTag}</div>`
        );
    }

    const component = helpers.mount(require.resolve("./index"), {
        comp: "a"
    });
    const innerHTML = "<span>body text</span>";

    check("a", true);
    check(null);
    check("a");
    check();
    check("div");
    check("");
    check("a");
};
