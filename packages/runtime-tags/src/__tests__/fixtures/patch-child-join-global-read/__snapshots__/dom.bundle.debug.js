// tags/child.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input_a__OR__input_b__$global_g = /*@__PURE__*/ _fill_global_join("__tests__/tags/child.marko_0_input_a#3_input_b#4_$global_g#6", ($scope) => _text($scope["#text/0"], $scope.input_a + $scope.input_b + _global_read($scope.$global, "g")), "g");
const $input_a__OR__input_b = /*@__PURE__*/ _fill_signal("input_a __tests__/tags/child.marko_fill0,input_b __tests__/tags/child.marko_fill1", /*@__PURE__*/ _or_resume("__tests__/tags/child.marko_0_input_a#3_input_b#4/init", 5, $input_a__OR__input_b__$global_g));
const $input_a = /*@__PURE__*/ _const("input_a", $input_a__OR__input_b);
const $input_b = /*@__PURE__*/ _const("input_b", $input_a__OR__input_b);
const $input$1 = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<button class=n>+</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}& b`)("D l", "D l");
const $n = /*@__PURE__*/ _let("n/7", ($scope) => {
	$input_b($scope["#childScope/0"], "n" + $scope.n);
	$input_a($scope["#childScope/1"], "m" + $scope.n);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $input_x = ($scope, input_x) => $input_a($scope["#childScope/0"], input_x);
const $input_y = ($scope, input_y) => $input_b($scope["#childScope/1"], input_y);
const $input = ($scope, input) => {
	$input_x($scope, input.x);
	$input_y($scope, input.y);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
