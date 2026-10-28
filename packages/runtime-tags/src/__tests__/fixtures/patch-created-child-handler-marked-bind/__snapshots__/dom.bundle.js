// tags/field.marko
const $input_onKeyDown__script = _script("b0", ($scope) => _on($scope.a, "keydown", $scope.d));

// template.marko
const $count = _let(5, ($scope) => _text($scope.b, $scope.f));
const $onKeyDown = ($scope) => function() {
	$count($scope._, +$scope._.f + 1);
};
_resumed.a0 = $onKeyDown;
