// template.marko
const $input_a__OR__n = /*@__PURE__*/ _or(8, ($scope) => {
	_text_content($scope.c, `& & & < ${_to_text($scope.g)} - ${_to_text($scope.h)}`);
	_text_content($scope.d, `& & & < ${_to_text($scope.g)} - ${_to_text($scope.h)}`);
});
const $n = /*@__PURE__*/ _let(7, ($scope) => {
	_text($scope.b, $scope.h);
	$input_a__OR__n($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.h + 1);
}));
