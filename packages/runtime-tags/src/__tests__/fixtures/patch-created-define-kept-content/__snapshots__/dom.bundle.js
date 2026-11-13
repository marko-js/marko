// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag(2);
const $c = _let(6, ($scope) => {
	$dynamicTag($scope, $scope.g);
	$dynamicTag2($scope, $scope.g);
});
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $card_content__label = /*@__PURE__*/ _closure_get_patch("a0", 6, ($scope) => _text($scope.a, $scope._.d), 0, "a3", 0);
const $card_content = _content$1("a1", "<span> </span>", "D ", $card_content__label);
