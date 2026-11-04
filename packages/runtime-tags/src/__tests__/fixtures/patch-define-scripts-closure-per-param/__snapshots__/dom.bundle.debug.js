// template.marko
const $template = "";
const $walks = "/&";
const $Row_content__input_c__OR__a__script = _script("__tests__/template.marko_1_input_c#0:3_a#2", ($scope) => console.log("a", $scope.a + $scope._.input_c));
const $Row_content__input_c__OR__a = /*@__PURE__*/ _or_patch("__tests__/template.marko_1_input_c#0:3_a#2/setup", 3, $Row_content__input_c__OR__a__script);
const $Row_content__input_c__OR__b__script = _script("__tests__/template.marko_1_input_c#0:3_b#4", ($scope) => console.log("b", $scope.b + $scope._.input_c));
const $Row_content__input_c__OR__b = /*@__PURE__*/ _or_patch("__tests__/template.marko_1_input_c#0:3_b#4/setup", 5, $Row_content__input_c__OR__b__script);
const $Row_content__input_c = /*@__PURE__*/ _closure_get("input_c/6", ($scope) => {
	$Row_content__input_c__OR__a($scope);
	$Row_content__input_c__OR__b($scope);
}, 0, "__tests__/template.marko_1_input_c#0:3/subscribe");
const $Row_content__setup = $Row_content__input_c;
const $Row_content__a = /*@__PURE__*/ _const("a", $Row_content__input_c__OR__a);
const $Row_content__b = /*@__PURE__*/ _const("b", $Row_content__input_c__OR__b);
const $Row_content__$params = ($scope, $params2) => $Row_content__$temp($scope, $params2[0]);
const $Row_content__$temp = ($scope, $temp) => {
	$Row_content__a($scope, $temp.a);
	$Row_content__b($scope, $temp.b);
};
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$Row_content__setup($scope["#childScope/0"]);
}
const $input_a = ($scope, input_a) => $Row_content__a($scope["#childScope/0"], input_a);
const $input_b = ($scope, input_b) => $Row_content__b($scope["#childScope/0"], input_b);
const $input = ($scope, input) => {
	$input_c($scope, input.c);
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
const $input_c__closure = /*@__PURE__*/ _closure($Row_content__input_c);
const $input_c = /*@__PURE__*/ _const("input_c", $input_c__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", "", "/&", $setup, $input);
