// template.marko
const $placeholder_content = _content("a2", "loading");
const $await_content__dark = /*@__PURE__*/ _closure_get(3, ($scope) => _text($scope.c, $scope._._.c), ($scope) => $scope._._, "a1");
const $await_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$dark($scope._._, !$scope._._.c);
}));
const $dark__closure = /*@__PURE__*/ _closure($await_content__dark);
const $dark = /*@__PURE__*/ _let(2, ($scope) => {
	_attr_class_item($scope.a, "dark", $scope.c);
	$dark__closure($scope);
});
