// tags/inner.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_content = $dynamicTag;

// tags/card.marko
const $c = /*@__PURE__*/ _let(6, ($scope) => {
	$input_content($scope.b, $scope.g);
	$input_content($scope.c, $scope.g);
});
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));
