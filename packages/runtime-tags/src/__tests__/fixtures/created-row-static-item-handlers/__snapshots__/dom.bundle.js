// tags/field.marko
const $input_onKeyDown__script = _script("b0", ($scope) => _on($scope.a, "keydown", $scope.d));

// template.marko
const $for_content__setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope._._, $scope._._.f + $scope.d * 10);
}));
const $count = /*@__PURE__*/ _let(5, ($scope) => _text($scope.b, $scope.f));
const $onKeyDown = ($scope) => function() {
	$count($scope._._, $scope._._.f + $scope.d);
};
_resumed.a0 = $onKeyDown;
