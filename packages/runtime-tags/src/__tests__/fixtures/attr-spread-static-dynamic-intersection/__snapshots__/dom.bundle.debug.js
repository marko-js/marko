// template.marko
const $template = "<!><button>Click</button>";
const $walks = "b0&0& b";
const $Dyn_content__count = /*@__PURE__*/ _let("count/0", ($scope) => _return($scope, {
	"data-count": $scope.count,
	onClick: $_return($scope)
}));
const $Dyn_content__setup = /*@__PURE__*/ _child_setup(($scope) => $Dyn_content__count($scope, 0));
const $Stat_content__setup = /*@__PURE__*/ _child_setup(($scope) => _return($scope, { class: "foo" }));
const $staticAttrs__OR__dynamicAttrs__script = _script("__tests__/template.marko_0_staticAttrs_dynamicAttrs", ($scope) => _attrs_script($scope, "#button/4"));
const $staticAttrs__OR__dynamicAttrs = /*@__PURE__*/ _or(7, ($scope) => {
	_attrs($scope, "#button/4", {
		...$scope.staticAttrs,
		...$scope.dynamicAttrs
	});
	$staticAttrs__OR__dynamicAttrs__script($scope);
});
const $staticAttrs = _var_resume("__tests__/template.marko_0_staticAttrs/var", /*@__PURE__*/ _const("staticAttrs", $staticAttrs__OR__dynamicAttrs));
function $setup($scope) {
	_var($scope, "#childScope/0", $staticAttrs);
	$Stat_content__setup._($scope["#childScope/0"], $scope);
	_var($scope, "#childScope/2", $dynamicAttrs);
	$Dyn_content__setup._($scope["#childScope/2"], $scope);
}
const $dynamicAttrs = _var_resume("__tests__/template.marko_0_dynamicAttrs/var", /*@__PURE__*/ _const("dynamicAttrs", $staticAttrs__OR__dynamicAttrs));
function $_return($scope) {
	return function() {
		$Dyn_content__count($scope, $scope.count + 1);
	};
}
_resume("__tests__/template.marko_2/_return", $_return);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
