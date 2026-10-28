// template.marko
const $placeholder_content = _content$1("a2", "<em>loading</em>");
const $await_content__input_label__OR__n = /*@__PURE__*/ _fill_signal("6 a9", /*@__PURE__*/ _or_resume("a13", 1, ($scope) => _text($scope.a, $scope._._.g + $scope._._.h)), _closure_subscribers, 9, 0);
const $await_content__input_label = _closure_resume("a0", /*@__PURE__*/ _closure_get(9, $await_content__input_label__OR__n, ($scope) => $scope._._));
const $await_content__n = /*@__PURE__*/ _init_resume("a12", /*@__PURE__*/ _closure_get(10, $await_content__input_label__OR__n, ($scope) => $scope._._, "a1"));
const $n__closure = /*@__PURE__*/ _closure($await_content__n);
const $n = /*@__PURE__*/ _let(7, ($scope) => {
	_text($scope.b, $scope.h);
	$n__closure($scope);
});
const $setup__script = _script("a8", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.h + 1);
}));
