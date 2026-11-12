// template.marko
const $placeholder_content = _content$1("a7", "<em>loading</em>");
const $await_content__input_label__OR__n = /*@__PURE__*/ _or_patch("a1", 1, ($scope) => _text($scope.a, $scope._._.g + $scope._._.h));
const $await_content__n = /*@__PURE__*/ _closure_get_patch("a2", 10, $await_content__input_label__OR__n, ($scope) => $scope._._);
const $n__closure = /*@__PURE__*/ _closure($await_content__n);
const $n = _let(7, ($scope) => {
	_text($scope.b, $scope.h);
	$n__closure($scope);
});
const $setup__script = _script("a8", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.h + 1);
}));
