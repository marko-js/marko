// template.marko
const $todo__script = _script("a0", ($scope) => _on($scope.b, "click", $scope.f ? () => {
	$log($scope, String($scope.e.flag));
} : void 0));
const $log = /*@__PURE__*/ _let(6, ($scope) => _text($scope.d, $scope.g));
const $setup__script = _script("a1", ($scope) => {
	_on($scope.a, "click", function() {
		$log($scope, JSON.stringify($scope.e));
	});
	_on($scope.c, "click", function() {
		$log($scope, String($scope.e.todo.id));
	});
});
