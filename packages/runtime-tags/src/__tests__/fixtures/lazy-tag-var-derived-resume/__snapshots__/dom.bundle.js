// template.marko
const $actions = /*@__PURE__*/ _const(6);
const $inc2 = /*@__PURE__*/ _const(7, _script("b2", ($scope) => _on($scope.e, "click", $scope.h)));
const $api = _var_resume("b1", /*@__PURE__*/ _const(5, ($scope) => {
	$actions($scope, { api: $scope.f });
	$inc2($scope, $inc($scope));
}));
const $setup__script = _script("b3", ($scope) => _on($scope.d, "click", function() {
	$scope.g.api();
}));
const $inc = ($scope) => function() {
	$scope.f();
};
_resumed.b0 = $inc;

// child.marko
const $n = /*@__PURE__*/ _let(1, ($scope) => {
	_text($scope.a, $scope.b);
	_return($scope, $_return($scope));
});
const $_return = ($scope) => () => $n($scope, +$scope.b + 1) - 1;
_resumed.a0 = $_return;
