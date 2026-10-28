// tags/outer.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $o = /*@__PURE__*/ _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$o($scope, void 0);
}));
