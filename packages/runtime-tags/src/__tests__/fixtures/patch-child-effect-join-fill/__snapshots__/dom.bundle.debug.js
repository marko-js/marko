// tags/child.marko
const $template$1 = "<p> </p><div></div>";
const $walks$1 = "D l b";
const $setup$1 = () => {};
const $input_a__OR__input_b = /*@__PURE__*/ _fill_join("__tests__/tags/child.marko_fill1", "input_b", /*@__PURE__*/ _fill_join("__tests__/tags/child.marko_fill0", "input_a", /*@__PURE__*/ _shell_or("__tests__/tags/child.marko_0_input_a#4_input_b#5/init", 6, ($scope) => _text($scope["#text/0"], $scope.input_a + $scope.input_b))));
const $input_a__script = _script("__tests__/tags/child.marko_0_input_a#4", ($scope) => _el_read($scope["#div/1"]).textContent = "s:" + $scope.input_a);
const $input_a$1 = /*@__PURE__*/ _const("input_a", ($scope) => {
	$input_a__script($scope);
	$input_a__OR__input_b($scope);
});
const $input_b = /*@__PURE__*/ _const("input_b", $input_a__OR__input_b);
const $input$1 = ($scope, input) => {
	$input_a$1($scope, input.a);
	$input_b($scope, input.b);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)($walks$1);
const $n = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "n/5", ($scope) => $input_b($scope["#childScope/0"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$n($scope, 0);
}
const $input_a = ($scope, input_a) => $input_a$1($scope["#childScope/0"], input_a);
const $input = ($scope, input) => $input_a($scope, input.a);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
