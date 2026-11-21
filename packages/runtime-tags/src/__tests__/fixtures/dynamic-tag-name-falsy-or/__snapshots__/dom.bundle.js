// template.marko
const $section_content__count = /*@__PURE__*/ _closure_get(4, ($scope) => _text($scope.a, $scope._.d), 0, "a4");
const $falseChild_content__count = /*@__PURE__*/ _closure_get(4, ($scope) => _text($scope.b, $scope._.d), 0, "a2");
const $falseChild_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope._, +$scope._.d + 1);
}));
const $count = /*@__PURE__*/ _let(3, /* @__PURE__ */ _closure($falseChild_content__count, $section_content__count));
