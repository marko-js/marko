// template.marko
const $text__OR__raw = /*@__PURE__*/ _or(7, ($scope) => _text($scope.c, `${_to_text($scope.f)}${_to_text($scope.g)}`));
const $text = /*@__PURE__*/ _let(5, ($scope) => {
	_text($scope.a, $scope.f);
	$text__OR__raw($scope);
});
const $raw = /*@__PURE__*/ _let(6, ($scope) => {
	_text($scope.b, $scope.g);
	$text__OR__raw($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.e, "click", function() {
	$text($scope, "shown");
	$raw($scope, "raw");
}));
