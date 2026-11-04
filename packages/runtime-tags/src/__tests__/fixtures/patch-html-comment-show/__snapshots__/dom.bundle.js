// template.marko
const $input_label__OR__count = /*@__PURE__*/ _or_patch("a1", 9, ($scope) => _text($scope.a, `${_to_text($scope.g)} ${_to_text($scope.i)}`));
const $count = _let(8, $input_label__OR__count);
const $setup__script = _script("a0", ($scope) => _on($scope.d, "click", function() {
	$count($scope, +$scope.i + 1);
}));
