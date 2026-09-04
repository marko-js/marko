// tags/relay/tags/leaf/index.marko
const $input_text = ($scope, input_text) => _text($scope.a, input_text);

// tags/relay/index.marko
const $input_val = ($scope, input_val) => $input_text($scope.a, input_val);

// template.marko
const $input_base__OR__count = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _or(6, ($scope) => $input_val($scope.a, $scope.e + $scope.f)));
const $count = /*@__PURE__*/ _let(5, $input_base__OR__count);
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
const $input_base = _fill_const("a0", 4, $input_base__OR__count);
