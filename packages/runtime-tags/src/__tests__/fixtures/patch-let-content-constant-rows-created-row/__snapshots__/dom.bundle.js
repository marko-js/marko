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
const $for_content2__input_label = /*@__PURE__*/ _closure_get_patch("a0", 5, ($scope) => _text($scope.a, $scope._._._.e), ($scope) => $scope._._._, "a3", 0);
const $card_content__for = /*@__PURE__*/ _for_to_unkeyed(0, "<b> </b>", "D ", $for_content2__input_label);
const $card_content__setup = ($scope) => $card_content__for($scope, [2, 1]);
const $card_content = _content$1("a1", "<!><!><!>", "b%", $card_content__setup);
