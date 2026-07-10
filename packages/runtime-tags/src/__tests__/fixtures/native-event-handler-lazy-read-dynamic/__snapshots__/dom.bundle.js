// template.marko
const $enabled__script = _script("a0", ($scope) => _on($scope.c, "click", ("g" in $scope ? $scope.g : true) && (() => {
	$log($scope, `${"i" in $scope ? $scope.i : ""}(${"h" in $scope ? $scope.h : 0})`);
})));
const $enabled = /*@__PURE__*/ _let(6, ($scope) => {
	_text($scope.d, $scope.g);
	$enabled__script($scope);
});
const $other = /*@__PURE__*/ _let(7, ($scope) => _text($scope.e, $scope.h));
const $log = /*@__PURE__*/ _let(8, ($scope) => _text($scope.f, $scope.i));
const $setup__script = _script("a1", ($scope) => {
	_on($scope.a, "click", function() {
		$enabled($scope, !("g" in $scope ? $scope.g : true));
	});
	_on($scope.b, "click", function() {
		$other($scope, ("h" in $scope ? $scope.h : 0) + 1);
	});
});
