// tags/wrapper.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $input_content__OR__open = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.f && $scope.e));
const $open = /*@__PURE__*/ _let(5, $input_content__OR__open);
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));

// template.marko
const $wrapper_content = _content("a0", "Hello");
