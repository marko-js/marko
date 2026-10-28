// template.marko
const $Row_content__walks = "D lD l";
const $Row_content__template = "<p> </p><em> </em>";
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button>`)($Row_content__template, $Row_content__template);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($Row_content__walks, $Row_content__walks);
const $Row_content__input_y__OR__b = /*@__PURE__*/ _fill_join("| __tests__/template.marko_fill0", "input_y", /*@__PURE__*/ _or_resume("__tests__/template.marko_1_input_y#0:5_b#5/init", 6, ($scope) => _text($scope["#text/1"], $scope._.input_y + $scope.b)));
const $Row_content__input_y = /*@__PURE__*/ _closure_get("input_y/11", $Row_content__input_y__OR__b, 0, "__tests__/template.marko_1_input_y#0:5/subscribe");
const $Row_content__setup = $Row_content__input_y;
const $Row_content__a__OR__b = /*@__PURE__*/ _or_resume("__tests__/template.marko_1_a#4_b#5/init", 7, ($scope) => _text($scope["#text/0"], $scope.a + $scope.b));
const $Row_content__a = /*@__PURE__*/ _const("a", $Row_content__a__OR__b);
const $Row_content__b = /*@__PURE__*/ _const("b", ($scope) => {
	$Row_content__a__OR__b($scope);
	$Row_content__input_y__OR__b($scope);
});
const $Row_content__$params = ($scope, $params2) => $Row_content__$temp($scope, $params2[0]);
const $Row_content__$temp = ($scope, $temp) => {
	$Row_content__a($scope, $temp.a);
	$Row_content__b($scope, $temp.b);
};
const $n = /*@__PURE__*/ _let("n/8", ($scope) => $Row_content__a($scope["#childScope/0"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$Row_content__setup($scope["#childScope/0"]);
	$scope["#childScope/1"]._ = $scope;
	$Row_content__setup($scope["#childScope/1"]);
	$n($scope, 0);
	$setup__script($scope);
}
const $input_x = ($scope, input_x) => $Row_content__b($scope["#childScope/0"], input_x);
const $input_row_a = ($scope, input_row_a) => $Row_content__a($scope["#childScope/1"], input_row_a);
const $input_row_b = ($scope, input_row_b) => $Row_content__b($scope["#childScope/1"], input_row_b);
const $input = ($scope, input) => {
	$input_y($scope, input.y);
	$input_x($scope, input.x);
	$input_row($scope, input.row);
};
const $input_y__closure = /*@__PURE__*/ _closure($Row_content__input_y);
const $input_y = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_y", $input_y__closure, /*@__PURE__*/ _fill_mark("input_y", $input_y__closure));
const $input_row = ($scope, input_row) => {
	$input_row_a($scope, input_row?.a);
	$input_row_b($scope, input_row?.b);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
