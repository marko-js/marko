// template.marko
const $Foo_content__walks = " b", $Foo_content__template = " ", $Bar_content__walks = /* @__PURE__ */ ((_w0) => `b/${_w0}&b`)($Foo_content__walks), $Bar_content__template = /* @__PURE__ */ ((_w0) => `<!>${_w0}<!>`)($Foo_content__template);
const $template = /* @__PURE__ */ ((_w0) => `<!>${_w0}<!>`)($Bar_content__template);
const $walks = /* @__PURE__ */ ((_w0) => `b/${_w0}&b`)($Bar_content__walks);
const $Bar_content__input_foo = ($scope, input_foo) => $Foo_content__input_foo($scope["#childScope/0"], input_foo);
const $Bar_content__$params = ($scope, $params3) => $Bar_content__input($scope, $params3[0]);
const $Bar_content__input = ($scope, input) => $Bar_content__input_foo($scope, input.foo);
const $Foo_content__input_foo = ($scope, input_foo) => _text($scope["#text/0"], input_foo || "fallback");
const $Foo_content__$params = ($scope, $params2) => $Foo_content__input($scope, $params2[0]);
const $Foo_content__input = ($scope, input) => $Foo_content__input_foo($scope, input.foo);
function $setup($scope) {
	$Bar_content__input_foo($scope["#childScope/0"]);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
