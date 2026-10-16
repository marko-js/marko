// template.marko
const $Row_content__walks = "D l b";
const $Row_content__template = "<p> </p><div></div>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($Row_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Row_content__walks);
const $Row_content__a__OR__b = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill2", "b", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "a", /*@__PURE__*/ _shell_or("__tests__/template.marko_1_a#4_b#5/init", 6, ($scope) => _text($scope["#text/0"], $scope.a + $scope.b))));
const $Row_content__a__script = _script("__tests__/template.marko_1_a#4", ($scope) => _el_read($scope["#div/1"]).textContent = "s:" + $scope.a);
const $Row_content__a = /*@__PURE__*/ _const("a", ($scope) => {
	$Row_content__a__script($scope);
	$Row_content__a__OR__b($scope);
});
const $Row_content__b = /*@__PURE__*/ _const("b", $Row_content__a__OR__b);
const $Row_content__$params = ($scope, $params2) => $Row_content__$temp($scope, $params2[0]);
const $Row_content__$temp = ($scope, $temp) => {
	$Row_content__a($scope, $temp.a);
	$Row_content__b($scope, $temp.b);
};
const $n = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "n/5", ($scope) => $Row_content__b($scope["#childScope/0"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$n($scope, 0);
}
const $input_a = ($scope, input_a) => $Row_content__a($scope["#childScope/0"], input_a);
const $input = ($scope, input) => $input_a($scope, input.a);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
