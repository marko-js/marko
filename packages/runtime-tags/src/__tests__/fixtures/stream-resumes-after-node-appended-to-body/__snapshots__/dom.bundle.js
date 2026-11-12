// template.marko
const $await_content2__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$clicks($scope._, +$scope._.d + 1);
}));
const $await_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$clicks($scope._, +$scope._.d + 1);
}));
const $clicks = /*@__PURE__*/ _let(3, ($scope) => _text($scope.a, $scope.d));

// tags/counter.marko
const $count = /*@__PURE__*/ _let(5, ($scope) => _text($scope.b, $scope.f));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.f + 1);
}));
