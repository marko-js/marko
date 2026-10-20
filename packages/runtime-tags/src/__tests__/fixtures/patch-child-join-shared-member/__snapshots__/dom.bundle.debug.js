// tags/row.marko
const $template$1 = "<p> </p><em> </em>";
const $walks$1 = "D lD l";
const $setup$1 = ($_) => {};
const $input_a__OR__input_b = /*@__PURE__*/ _shell_or("__tests__/tags/row.marko_0_input_a#4_input_b#5/init", 6, ($scope) => _text($scope["#text/0"], $scope.input_a + $scope.input_b));
const $input_a = /*@__PURE__*/ _const("input_a", $input_a__OR__input_b);
const $input_b__OR__input_y = /*@__PURE__*/ _shell_or("__tests__/tags/row.marko_0_input_b#5_input_y#7/init", 8, ($scope) => _text($scope["#text/1"], $scope.input_y + $scope.input_b));
const $input_b = /*@__PURE__*/ _const("input_b", ($scope) => {
	$input_a__OR__input_b($scope);
	$input_b__OR__input_y($scope);
});
const $input_y$1 = /*@__PURE__*/ _const("input_y", $input_b__OR__input_y);
const $input$1 = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
	$input_y$1($scope, input.y);
};
var row_default = /*@__PURE__*/ _template("__tests__/tags/row.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1, _w2) => `${_w0}${_w1}${_w2}<button>+</button>`)($template$1, $template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1, _w2) => `/${_w0}&/${_w1}&/${_w2}& b`)($walks$1, $walks$1, $walks$1);
const $n = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "n/8", ($scope) => {
	$input_a($scope["#childScope/0"], $scope.n);
	$input_b($scope["#childScope/0"], $scope.n);
	$input_a($scope["#childScope/1"], $scope.n);
	$input_a($scope["#childScope/2"], $scope.n);
	$input_y$1($scope["#childScope/2"], $scope.n);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$n($scope, 0);
}
const $input_y = ($scope, input_y) => {
	$input_y$1($scope["#childScope/0"], input_y);
	$input_y$1($scope["#childScope/1"], input_y);
};
const $input_x = ($scope, input_x) => {
	$input_b($scope["#childScope/1"], input_x);
	$input_b($scope["#childScope/2"], input_x);
};
const $input = ($scope, input) => {
	$input_y($scope, input.y);
	$input_x($scope, input.x);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
