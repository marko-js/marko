// template.marko
const $enabled__render = /*@__PURE__*/ _render(($scope) => _text($scope.d, $scope.g));
const $enabled__script = _script("a0", ($scope) => _on($scope.c, "click", $scope.g && (() => {
	$log($scope, `${$scope.i}(${$scope.h})`);
})));
const $enabled = /*@__PURE__*/ _let(6, ($scope) => {
	$enabled__render($scope);
	$enabled__script($scope);
});
const $other = /*@__PURE__*/ _let(7, /*@__PURE__*/ _render(($scope) => _text($scope.e, $scope.h)));
const $log = /*@__PURE__*/ _let(8, /*@__PURE__*/ _render(($scope) => _text($scope.f, $scope.i)));
const $setup__script = _script("a1", ($scope) => {
	_on($scope.a, "click", function() {
		$enabled($scope, !$scope.g);
	});
	_on($scope.b, "click", function() {
		$other($scope, $scope.h + 1);
	});
});
