// template.marko
const $A_content__h = /*@__PURE__*/ _closure_get_patch("a1", 6, ($scope) => _text($scope.a, $scope._.d), 0, "a4", 0);
const $A_content = _content("a0", "<p> </p>", "D ", $A_content__h);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $open__OR__A = /*@__PURE__*/ _or(5, ($scope) => $dynamicTag($scope, $scope.c ? $scope.e : null));
const $open = _let(2, $open__OR__A);
const $setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.c);
}));
