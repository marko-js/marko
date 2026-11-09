// tags/todo-view.marko
const $log$1 = /*@__PURE__*/ _let(8, ($scope) => _text($scope.c, $scope.i));
const $setup__script$1 = _script("c0", ($scope) => _on($scope.b, "click", function() {
	$log$1($scope, `${$scope.i}[${$scope.h}]`);
}));

// tags/todo-box.marko
const $log = /*@__PURE__*/ _let(8, ($scope) => _text($scope.c, $scope.i));
const $setup__script = _script("b2", ($scope) => _on($scope.b, "click", function() {
	$log($scope, `${$scope.i}[${$scope.h}]`);
}));
