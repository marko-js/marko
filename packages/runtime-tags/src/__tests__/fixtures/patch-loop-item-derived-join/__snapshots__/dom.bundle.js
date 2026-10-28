// template.marko
const $for_content__label = /*@__PURE__*/ _init_resume("a4", /*@__PURE__*/ _for_closure(2, ($scope) => _text($scope.b, $scope._.j)));
const $label = /*@__PURE__*/ _const(9, ($scope) => {
	_text($scope.b, $scope.j);
	$for_content__label($scope);
});
const $input_prefix__OR__n = /*@__PURE__*/ _fill("a2", 5, /*@__PURE__*/ _or(8, ($scope) => $label($scope, `${$scope.f}${$scope.h}`)));
const $n = _let(7, $input_prefix__OR__n);
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.h + 1);
}));
