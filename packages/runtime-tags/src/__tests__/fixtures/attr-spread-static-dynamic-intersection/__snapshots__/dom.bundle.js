// template.marko
const $Dyn_content__count = /*@__PURE__*/ _let(0, ($scope) => _return($scope, {
	"data-count": $scope.a,
	onClick: $_return($scope)
}));
const $staticAttrs__OR__dynamicAttrs__script = _script("a4", ($scope) => _attrs_script($scope, "e"));
const $staticAttrs__OR__dynamicAttrs = /*@__PURE__*/ _or(7, ($scope) => {
	_attrs($scope, "e", {
		...$scope.f,
		...$scope.g
	});
	$staticAttrs__OR__dynamicAttrs__script($scope);
});
const $staticAttrs = _var_resume("a5", /*@__PURE__*/ _const(5, $staticAttrs__OR__dynamicAttrs));
const $dynamicAttrs = _var_resume("a3", /*@__PURE__*/ _const(6, $staticAttrs__OR__dynamicAttrs));
function $_return($scope) {
	return function() {
		$Dyn_content__count($scope, $scope.a + 1);
	};
}
_resume("a0", $_return);
