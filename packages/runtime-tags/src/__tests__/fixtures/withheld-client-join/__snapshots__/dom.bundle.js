// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag(2);
const $c = /*@__PURE__*/ _let(6, ($scope) => {
	$dynamicTag($scope, $scope.g);
	$dynamicTag2($scope, $scope.g);
});
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $card_content__n = /*@__PURE__*/ _let(3, ($scope) => _text($scope.c, $scope.d));
const $card_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$card_content__n($scope, +$scope.d + 1);
}));
