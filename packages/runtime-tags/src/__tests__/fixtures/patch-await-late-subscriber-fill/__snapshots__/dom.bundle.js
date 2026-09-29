// template.marko
const $placeholder_content = _content$1("a6", "<em>loading</em>");
const $await_content__input_label__OR__n = /*@__PURE__*/ _fill_join_subscribers("a8", 6, /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope._._.g + $scope._._.h)), () => $await_content__input_label, 0);
const $await_content__input_label = /*@__PURE__*/ _closure_get(9, $await_content__input_label__OR__n, ($scope) => $scope._._, "a3");
const $await_content__n = /*@__PURE__*/ _closure_get(10, $await_content__input_label__OR__n, ($scope) => $scope._._, "a4");
const $n__closure = /*@__PURE__*/ _closure($await_content__n);
const $n = /*@__PURE__*/ _let(7, ($scope) => {
	_text($scope.b, $scope.h);
	$n__closure($scope);
});
const $setup__script = _script("a7", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.h + 1);
}));
