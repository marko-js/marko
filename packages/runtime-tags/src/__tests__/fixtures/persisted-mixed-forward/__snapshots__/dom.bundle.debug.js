// tags/kid.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $input_a__OR__input_b = /*@__PURE__*/ _or(5, ($scope) => _text($scope["#text/0"], $scope.input_a + $scope.input_b));
const $input_a = /*@__PURE__*/ _const("input_a", $input_a__OR__input_b);
const $input_b = /*@__PURE__*/ _const("input_b", $input_a__OR__input_b);
const $input$1 = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
var kid_default = /*@__PURE__*/ _template("__tests__/tags/kid.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)("D l");
const $s = /*@__PURE__*/ _let("s/5", ($scope) => $input_a($scope["#childScope/0"], $scope.s));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$s($scope, +$scope.s + 1);
}));
function $setup($scope) {
	$s($scope, 1);
	$setup__script($scope);
}
const $input_x = _fill_const("__tests__/template.marko0", "input_x", ($scope) => $input_b($scope["#childScope/0"], $scope.input_x));
const $input = ($scope, input) => $input_x($scope, input.x);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
