// template.marko
const $template = "";
const $walks = "/&";
const $Row_content__sep__OR__a__script = _script("__tests__/template.marko_1_sep#0:5_a#2", ($scope) => console.log("a", $scope.a + $scope._.sep));
const $Row_content__sep__OR__a = /*@__PURE__*/ _or_patch("__tests__/template.marko_1_sep#0:5_a#2/setup", 3, $Row_content__sep__OR__a__script);
const $Row_content__sep__OR__b__script = _script("__tests__/template.marko_1_sep#0:5_b#4", ($scope) => console.log("b", $scope.b + $scope._.sep));
const $Row_content__sep__OR__b = /*@__PURE__*/ _or_patch("__tests__/template.marko_1_sep#0:5_b#4/setup", 5, $Row_content__sep__OR__b__script);
const $Row_content__sep = /*@__PURE__*/ _closure_get("sep/6", ($scope) => {
	$Row_content__sep__OR__a($scope);
	$Row_content__sep__OR__b($scope);
});
const $Row_content__setup = $Row_content__sep;
const $Row_content__a = /*@__PURE__*/ _const("a", $Row_content__sep__OR__a);
const $Row_content__b = /*@__PURE__*/ _const("b", $Row_content__sep__OR__b);
const $Row_content__$params = ($scope, $params2) => $Row_content__$temp($scope, $params2[0]);
const $Row_content__$temp = ($scope, $temp) => {
	$Row_content__a($scope, $temp.a);
	$Row_content__b($scope, $temp.b);
};
const $sep = /*@__PURE__*/ _const("sep");
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$Row_content__setup($scope["#childScope/0"]);
	$sep($scope, ":");
}
const $input_a = ($scope, input_a) => $Row_content__a($scope["#childScope/0"], input_a);
const $input_b = ($scope, input_b) => $Row_content__b($scope["#childScope/0"], input_b);
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", "", "/&", $setup, $input);
