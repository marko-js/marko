// template.marko
const $pattern2 = fill("a3", /*@__PURE__*/ _const(10, ($scope) => $uid($scope, $scope.k.uid)));
const $input_name__OR__uid = /*@__PURE__*/ _fill_join("a1", 7, /*@__PURE__*/ _or(12, ($scope) => {
	_attr($scope.a, "for", `${$scope.l}-${$scope.h}`);
	_attr($scope.c, "id", `${$scope.l}-${$scope.h}`);
}));
const $uid__script = _script("a0", ($scope) => _on($scope.d, "click", function() {
	$shown($scope, $scope.l);
}));
const $uid = /*@__PURE__*/ _const(11, ($scope) => {
	$input_name__OR__uid($scope);
	$uid__script($scope);
});
const $shown = /*@__PURE__*/ _let(13, ($scope) => _text($scope.e, $scope.n));
