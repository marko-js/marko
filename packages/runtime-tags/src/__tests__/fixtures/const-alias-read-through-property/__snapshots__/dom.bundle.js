// template.marko
const $obj = /*@__PURE__*/ _let(6, ($scope) => {
	$p($scope, $scope.g);
	$obj_a($scope, $scope.g?.a);
});
const $p = ($scope) => {
	_text($scope.b, JSON.stringify($scope.g));
};
const $obj_a__script = _script("a0", ($scope) => _on($scope.d, "click", function() {
	$obj($scope, { a: $scope.h + 1 });
}));
const $obj_a = /*@__PURE__*/ _const(7, ($scope) => {
	_text($scope.a, $scope.h);
	$obj_a__script($scope);
});
