// template.marko
const $template = "<!><button> </button>";
const $walks = "b0& D l";
const $Let_content__internal = /* @__PURE__ */ _let("internal/0", ($scope) => _return($scope, $scope.internal));
const $Let_content__setup = /* @__PURE__ */ _child_setup(($scope) => {
	_return_change($scope, $valueChange($scope));
	$Let_content__internal($scope, 0);
});
const $a__OR__b__script = _script("__tests__/template.marko_0_a_b", ($scope) => _on($scope["#button/2"], "click", function() {
	_var_change($scope["#childScope/0"], $scope.a + 1, "a");
	$b($scope, $scope.b + 1);
}));
const $a__OR__b = /* @__PURE__ */ _or(6, ($scope) => {
	_text($scope["#text/3"], `${$scope.a},${$scope.b}`);
	$a__OR__b__script($scope);
});
const $a = _var_resume("__tests__/template.marko_0_a/var", /* @__PURE__ */ _const("a", $a__OR__b));
const $b = /* @__PURE__ */ _let("b/5", $a__OR__b);
function $setup($scope) {
	_var($scope, "#childScope/0", $a);
	$Let_content__setup._($scope["#childScope/0"], $scope);
	$b($scope, 0);
}
function $valueChange($scope) {
	return (_new_internal) => {
		$Let_content__internal($scope, _new_internal);
	};
}
_resume("__tests__/template.marko_1/valueChange", $valueChange);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
