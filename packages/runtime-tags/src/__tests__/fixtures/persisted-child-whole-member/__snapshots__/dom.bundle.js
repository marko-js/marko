// tags/duo/index.marko
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	_text($scope.b, JSON.stringify(input));
};

// template.marko
const $input_title__OR__count = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _or(6, ($scope) => $input($scope.a, {
	label: $scope.e,
	value: $scope.f
})));
const $count = /*@__PURE__*/ _let(5, $input_title__OR__count);
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
const $input_title = _fill_const("a0", 4, $input_title__OR__count);
