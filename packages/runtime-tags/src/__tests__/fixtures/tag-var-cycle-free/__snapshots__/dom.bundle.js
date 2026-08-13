// template.marko
const $mutualB_getter = /*@__PURE__*/ _hoist(3);
const $onCtrl_getter = _hoist_resume("a4", 8);
const $ctrl = /*@__PURE__*/ _let_change(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script("a5", ($scope) => _on($scope.a, "click", function() {
	$scope.c();
	$scope.f.m();
	$scope.i($scope.g + 1);
}));
const $mutualB = ($scope) => () => $scope.c();
const $mutualA = ($scope) => () => $mutualB_getter($scope)();
function $obj() {
	return $alias_getter($scope);
}
const $onCtrl = ($scope) => (v) => {
	$ctrl($scope, v);
};
_resume("a2", $mutualB);
_resume("a1", $mutualA);
_resume("a3", $obj);
_resume("a0", $onCtrl);
