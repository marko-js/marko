// template.marko
_dynamic_tag_var_resume(2);
const $Count_content__n = /*@__PURE__*/ _let(0, ($scope) => _return($scope, { n: $scope.a }));
const $Count_content__setup = /*@__PURE__*/ _child_setup(($scope) => $Count_content__n($scope, 1));
const $Count_content = _content("a0", 0, 0, $Count_content__setup);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(2, 0, () => $b);
const $Count__OR__on = /*@__PURE__*/ _or(9, ($scope) => $dynamicTag($scope, $scope.i && $scope.h));
const $on = /*@__PURE__*/ _let(8, $Count__OR__on);
const $setup__script = _script("a2", ($scope) => _on($scope.g, "click", function() {
	$on($scope, !$scope.i);
}));
const $b = _var_resume("a1", ($scope, b) => _text($scope.f, String(b && b.n)));
