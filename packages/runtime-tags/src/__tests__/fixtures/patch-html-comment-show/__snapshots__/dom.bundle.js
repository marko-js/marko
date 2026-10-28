// template.marko
const $input_label__OR__count = /*@__PURE__*/ _fill("a1", 7, /*@__PURE__*/ _or(10, ($scope) => _text($scope.a, `${_to_text($scope.h)} ${_to_text($scope.j)}`)));
const $count = _let(9, $input_label__OR__count);
const $setup__script = _script("a0", ($scope) => _on($scope.e, "click", function() {
	$count($scope, +$scope.j + 1);
}));
