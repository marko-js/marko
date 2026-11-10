// template.marko
const $Wrapper_content2 = _content("a2", "Hello");
const $Wrapper_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $Wrapper_content__content__OR__open = /*@__PURE__*/ _or(6, ($scope) => $Wrapper_content__dynamicTag($scope, $scope.f ? $scope.e : void 0));
const $Wrapper_content__open = /*@__PURE__*/ _let(5, $Wrapper_content__content__OR__open);
const $Wrapper_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$Wrapper_content__open($scope, !$scope.f);
}));
