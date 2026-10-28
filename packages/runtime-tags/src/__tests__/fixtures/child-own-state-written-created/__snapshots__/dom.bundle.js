// tags/gm-badge/index.marko
const $input_value = ($scope, input_value) => _text($scope.a, input_value + $scope.$.flag);

// template.marko
const $if_content__count = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_value($scope.a, $scope._.f));
const $count = /*@__PURE__*/ _let(5, $if_content__count);
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
