// template.marko
const $Outer_content__fn = ($scope, fn) => $Inner_content__fn($scope.a, fn);
const $Inner_content__fn__script = _script("a2", ($scope) => _on($scope.a, "click", $scope.e));
const $Inner_content__fn = /*@__PURE__*/ _const(4, $Inner_content__fn__script);
const $n = _let(5, ($scope) => {
	$Outer_content__fn($scope.a, $fn($scope));
	_text($scope.b, $scope.f);
});
const $fn = ($scope) => function() {
	$n($scope, +$scope.f + 1);
};
_resumed.a0 = $fn;
