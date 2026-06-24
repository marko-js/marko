// tags/child.marko
const $template$1 = "<!> ";
const $walks$1 = "%c";
const $setup$1 = () => {};
const $value = ($scope, value) => _text($scope["#text/0"], value);
const $input_value = $value;
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "%c", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)("%c", "%c");
const $x = /*@__PURE__*/ _let("x/2", ($scope) => $input_value($scope["#childScope/1"], $scope.x));
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$input_value($scope["#childScope/0"], 3);
	/* @__PURE__ */ $setup$1($scope["#childScope/1"]);
	$x($scope, "y");
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
