// template.marko
const $Inner_content__walks = "b", $Inner_content__template = "<span>inner</span>", $Outer_content__walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($Inner_content__walks), $Outer_content__template = /*@__PURE__*/ ((_w0) => `<div>${_w0}</div>`)($Inner_content__template);
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Outer_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Outer_content__walks);
const $setup = () => {};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
