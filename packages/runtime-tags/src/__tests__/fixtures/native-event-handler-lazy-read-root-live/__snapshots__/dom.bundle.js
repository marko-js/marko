// template.marko
const $todo__script = _script("a1", ($scope) => console.log(JSON.stringify($scope.c)));
const $open__script = _script("a0", ($scope) => _on($scope.a, "click", $scope.e ? () => {
	$log($scope, `${$scope.d}[${$scope.c.id}]`);
} : void 0));
const $log = /*@__PURE__*/ _let(3, ($scope) => _text($scope.b, $scope.d));
