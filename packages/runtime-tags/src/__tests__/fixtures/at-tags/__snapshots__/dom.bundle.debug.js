// tags/hello/index.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $input_foo_direct = /* @__PURE__ */ _dynamic_tag_content("#text/0");
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/0");
const $input_foo = $dynamicTag;
const $input = ($scope, input) => $input_foo($scope, input.foo);
var hello_default = /* @__PURE__ */ _template("__tests__/tags/hello/index.marko", $template$1, "b%c", $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => `b/${_w0}&b`)("b%c");
const $foo_content = /* @__PURE__ */ _content("__tests__/template.marko_1_content", "Foo!", "b");
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$input_foo($scope["#childScope/0"], attrTag({ content: $foo_content($scope) }));
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
