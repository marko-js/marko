// tags/baz.marko
const $template$1 = "<div></div>";
const $walks$1 = "b";
const $setup$1 = () => {};
var baz_default = /*@__PURE__*/ _template("__tests__/tags/baz.marko", $template$1, "b", $setup$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&b`)("b", "b");
const $setup = () => {};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
