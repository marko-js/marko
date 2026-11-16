// template.marko
const $template = "<p> </p><button>inc</button>";
const $walks = "0&D l b";
const $Child_content__input_x__OR__input_y = /*@__PURE__*/ _or(4, ($scope) => _return($scope, { a: $scope.input_x + $scope.input_y }));
const $Child_content__input_x = /*@__PURE__*/ _const("input_x", $Child_content__input_x__OR__input_y);
const $Child_content__input_y = /*@__PURE__*/ _const("input_y", $Child_content__input_x__OR__input_y);
const $Child_content__$params = ($scope, $params2) => $Child_content__input($scope, $params2[0]);
const $Child_content__input = ($scope, input) => {
	$Child_content__input_x($scope, input.x);
	$Child_content__input_y($scope, input.y);
};
const $count = /*@__PURE__*/ _let("count/4", ($scope) => $Child_content__input_x($scope["#childScope/0"], $scope.count));
const $other__OR__o_a = /*@__PURE__*/ _or(9, ($scope) => _text($scope["#text/2"], $scope.o_a + $scope.other), 1, "#scopeOffset/1");
const $other = /*@__PURE__*/ _let("other/5", ($scope) => {
	$Child_content__input_y($scope["#childScope/0"], $scope.other);
	$other__OR__o_a($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$count($scope, +$scope.count + 1);
	$other($scope, +$scope.other + 1);
}));
function $setup($scope) {
	_var($scope, "#childScope/0", $r);
	$count($scope, 0);
	$other($scope, 1);
	$setup__script($scope);
}
const $o = ($scope, o) => $o_a($scope, o.a);
const $r = _var_resume("__tests__/template.marko_0_r#6/var", ($scope, r) => $o($scope, { ...r }));
const $o_a = /*@__PURE__*/ _const("o_a", $other__OR__o_a);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
