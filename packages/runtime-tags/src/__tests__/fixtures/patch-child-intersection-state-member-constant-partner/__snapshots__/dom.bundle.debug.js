// tags/child.marko
const $template$1 = "<i> </i>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input_x__OR__input_k = /*@__PURE__*/ _or_patch("__tests__/tags/child.marko_0_input_x#3_input_k#4/setup", 5, ($scope) => _text($scope["#text/0"], $scope.input_x + $scope.input_k));
const $input_x = /*@__PURE__*/ _const("input_x", $input_x__OR__input_k);
const $input_k = /*@__PURE__*/ _const("input_k", $input_x__OR__input_k);
const $input$1 = ($scope, input) => {
	$input_x($scope, input.x);
	$input_k($scope, input.k);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>+</button>${_w0}<span> </span>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&D l`)("D l");
const $n = _let("n/6", ($scope) => $input_k($scope["#childScope/1"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$input_x($scope["#childScope/1"], "a");
	$n($scope, 0);
	$setup__script($scope);
}
const $input_y = ($scope, input_y) => _text($scope["#text/2"], input_y);
const $input = ($scope, input) => $input_y($scope, input.y);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
