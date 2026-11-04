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
const $inputtag_content = _content$1("a1", "x");
const $card_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(1, $inputtag_content);
const $card_content__input_tag = /*@__PURE__*/ _closure_get_patch("a2", 5, ($scope) => $card_content__dynamicTag($scope, $scope._._.e, ($_) => ({ onClick: $onClick($scope) })), ($scope) => $scope._._, "a5", 0);
const $card_content = _content$1("a3", "<div></div><!><!>", " b%", $card_content__input_tag);
const $onClick = ($scope) => function() {
	$scope.a.id = "x";
};
_resumed.a0 = $onClick;
