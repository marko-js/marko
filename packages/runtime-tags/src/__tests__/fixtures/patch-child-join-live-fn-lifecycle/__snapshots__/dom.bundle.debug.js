// tags/child.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input_b__OR__fmt__script = _script("__tests__/tags/child.marko_0_input_b#4_fmt#5", ($scope) => _lifecycle($scope, { onUpdate: function() {
	console.log("update", $scope.fmt() + $scope.input_b);
} }));
const $input_b__OR__fmt = /*@__PURE__*/ _fill_signal("input_b __tests__/tags/child.marko_fill0,fmt __tests__/tags/child.marko_fill1", /*@__PURE__*/ _or_resume("__tests__/tags/child.marko_0_input_b#4_fmt#5/init", 6, ($scope) => {
	_text($scope["#text/0"], $scope.fmt() + $scope.input_b);
	$input_b__OR__fmt__script($scope);
}));
const $fmt2 = /*@__PURE__*/ _const("fmt", $input_b__OR__fmt);
const $input_a$1 = /*@__PURE__*/ _const("input_a", ($scope) => $fmt2($scope, $fmt($scope)));
const $input_b$1 = /*@__PURE__*/ _const("input_b", $input_b__OR__fmt);
const $input$1 = ($scope, input) => {
	$input_a$1($scope, input.a);
	$input_b$1($scope, input.b);
};
const $fmt = ($scope) => () => $scope.input_a + "!";
_bind_resume("__tests__/tags/child.marko_0/fmt input_a", $fmt);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<button>+</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}& b`)("D l", "D l");
const $n = /*@__PURE__*/ _let("n/7", ($scope) => $input_b$1($scope["#childScope/0"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $input_a = ($scope, input_a) => {
	$input_a$1($scope["#childScope/0"], input_a);
	$input_a$1($scope["#childScope/1"], input_a);
};
const $input_b = ($scope, input_b) => $input_b$1($scope["#childScope/1"], input_b);
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
