// tags/hello.marko
const $template$1 = "<h1>Hello world</h1>";
const $walks$1 = "b";
const $setup$1 = () => {};
var hello_default = /*@__PURE__*/ _template("__tests__/tags/hello.marko", $template$1, "b", $setup$1);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("b");
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
