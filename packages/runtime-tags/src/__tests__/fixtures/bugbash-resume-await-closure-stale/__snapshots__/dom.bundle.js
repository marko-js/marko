// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a1", "loading", "b");
const $await_content__count = /*@__PURE__*/ _closure_get(3, ($scope) => _text($scope.b, $scope._._.d), ($scope) => $scope._._, "a0");
const $count__closure = /*@__PURE__*/ _closure($await_content__count);
const $count = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$count__closure($scope);
});
const $setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
