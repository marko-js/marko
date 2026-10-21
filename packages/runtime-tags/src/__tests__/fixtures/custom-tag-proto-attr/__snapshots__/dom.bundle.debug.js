// tags/child.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input = ($scope, input) => _text($scope["#text/0"], Object.hasOwn(input, "__proto__") ? input.__proto__ : "lost");
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "D l", 0, $input);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
function $setup($scope) {
	$input($scope["#childScope/0"], { ["__proto__"]: "kept" });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
