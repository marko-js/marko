// tags/card.marko
const $input_value = ($scope, input_value) => _text($scope.a, input_value);

// tags/outer.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(2);
const $o = /*@__PURE__*/ _let(6, ($scope) => {
	$input_value($scope.b, $scope.g === void 0);
	$dynamicTag($scope, $scope.g);
});
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$o($scope, void 0);
}));
