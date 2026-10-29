// tags/outer.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $input_label__OR__T = /*@__PURE__*/ _fill_join("b1", 5, /*@__PURE__*/ _or(7, ($scope) => $dynamicTag($scope, $scope.g, ($_) => ({ label: $scope.f }))));
const $T = /*@__PURE__*/ _fill_let("b2", 6, $input_label__OR__T);
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$T($scope, void 0);
}));
