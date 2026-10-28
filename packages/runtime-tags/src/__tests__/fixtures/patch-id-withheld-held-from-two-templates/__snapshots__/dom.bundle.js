// tags/inner.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_content = $dynamicTag;

// tags/card.marko
const $c = /*@__PURE__*/ _fill_let("b1", 7, ($scope) => $input_content($scope.b, $scope.h));
const $o = /*@__PURE__*/ _fill_let("b2", 8, ($scope) => $input_content($scope.c, $scope.i));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
	$o($scope, void 0);
}));
