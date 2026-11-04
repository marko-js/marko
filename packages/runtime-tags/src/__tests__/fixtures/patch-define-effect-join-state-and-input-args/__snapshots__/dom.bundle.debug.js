// template.marko
const $Row_content__walks = "D l";
const $Row_content__template = "<p> </p>";
const $template = /*@__PURE__*/ ((_w0) => `<pre id=log></pre>${_w0}<button>+</button>`)($Row_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Row_content__walks);
const $Row_content__a__OR__b__script = _script("__tests__/template.marko_1_a#3_b#4", ($scope) => document.getElementById("log").textContent = String($scope.a + $scope.b));
const $Row_content__a__OR__b = /*@__PURE__*/ _or_patch("__tests__/template.marko_1_a#3_b#4/setup", 5, ($scope) => {
	_text($scope["#text/0"], $scope.a + $scope.b);
	$Row_content__a__OR__b__script($scope);
});
const $Row_content__a = /*@__PURE__*/ _const("a", $Row_content__a__OR__b);
const $Row_content__b = /*@__PURE__*/ _const("b", $Row_content__a__OR__b);
const $Row_content__$params = ($scope, $params2) => $Row_content__$temp($scope, $params2[0]);
const $Row_content__$temp = ($scope, $temp) => {
	$Row_content__a($scope, $temp.a);
	$Row_content__b($scope, $temp.b);
};
const $input_x__OR__n = /*@__PURE__*/ _or_patch("__tests__/template.marko_0_input_x#4_n#6/setup", 7, ($scope) => $Row_content__a($scope["#childScope/0"], $scope.n + $scope.input_x));
const $input_y__OR__n = /*@__PURE__*/ _or_patch("__tests__/template.marko_0_input_y#5_n#6/setup", 8, ($scope) => $Row_content__b($scope["#childScope/0"], $scope.n + $scope.input_y));
const $n = _let("n/6", ($scope) => {
	$input_x__OR__n($scope);
	$input_y__OR__n($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $input_x = /*@__PURE__*/ _const("input_x", $input_x__OR__n);
const $input_y = /*@__PURE__*/ _const("input_y", $input_y__OR__n);
const $input = ($scope, input) => {
	$input_x($scope, input.x);
	$input_y($scope, input.y);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
