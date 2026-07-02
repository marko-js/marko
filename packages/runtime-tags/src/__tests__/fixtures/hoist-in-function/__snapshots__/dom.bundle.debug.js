// tags/child.marko
const $template$1 = "<div> </div>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $input_fn = ($scope, input_fn) => _text($scope["#text/0"], typeof input_fn);
const $input = ($scope, input) => $input_fn($scope, input.fn);
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", $template$1, "D l", $setup$1, $input);

// template.marko
const $template = $template$1;
const $walks = /* @__PURE__ */ ((_w0) => `/${_w0}&`)("D l");
const $x_getter = /* @__PURE__ */ _hoist("x");
const $x = /* @__PURE__ */ _const("x", ($scope) => _assert_hoist($scope.x));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => $x_getter($scope)());
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$input_fn($scope["#childScope/0"], () => $x_getter($scope)());
	$x($scope, 1);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
