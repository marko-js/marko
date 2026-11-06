// template.marko
const $for_content2__label = /*@__PURE__*/ _for_closure(1, ($scope) => _text($scope.a, $scope._.h), 10);
const $for_content2__suffix = /*@__PURE__*/ _for_closure(1, ($scope) => _text($scope.c, $scope._.i), 11);
const $for_content__label = /*@__PURE__*/ _for_closure(0, ($scope) => _text($scope.a, $scope._.h), 9);
const $label = /*@__PURE__*/ _let(7, ($scope) => {
	$for_content__label($scope);
	$for_content2__label($scope);
});
const $suffix = /*@__PURE__*/ _let(8, $for_content2__suffix);
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$label($scope, "b");
	$suffix($scope, "?");
}));
