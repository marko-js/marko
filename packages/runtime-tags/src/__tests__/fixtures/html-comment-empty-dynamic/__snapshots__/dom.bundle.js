// template.marko
const $text__OR__raw = /*@__PURE__*/ _or(6, ($scope) => _text($scope.c, `${_to_text($scope.e)}${_to_text($scope.f)}`));
const $text = /*@__PURE__*/ _let(4, ($scope) => {
	_text($scope.a, $scope.e);
	$text__OR__raw($scope);
});
const $raw = /*@__PURE__*/ _let(5, ($scope) => {
	_text($scope.b, $scope.f);
	$text__OR__raw($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.d, "click", function() {
	$text($scope, "shown");
	$raw($scope, "raw");
}));
