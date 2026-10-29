// template.marko
const $count = _let(5, ($scope) => _text($scope.b, $scope.f));
const $onPick = ($scope) => function() {
	$count($scope._, +$scope._.f + 1);
};
_resumed.a0 = $onPick;

// tags/picker.marko
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$scope.d();
}));
