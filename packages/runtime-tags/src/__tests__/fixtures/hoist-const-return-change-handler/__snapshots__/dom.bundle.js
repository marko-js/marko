// template.marko
const $Counter_content__setCount_getter = _hoist_resume("a1", 1);
const $Counter_content__count = /*@__PURE__*/ _let(0, ($scope) => _return($scope, $scope.a));
const $c = _var_resume("a3", /*@__PURE__*/ _const(4, ($scope) => _text($scope.d, $scope.e)));
const $setup__script = _script("a4", ($scope) => _on($scope.c, "click", function() {
	_var_change($scope.a, +$scope.e + 1);
}));
const $setCount = ($scope) => (value) => {
	$Counter_content__count($scope, value);
};
_resumed.a0 = $setCount;
