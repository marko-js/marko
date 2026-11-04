// tags/getter.marko
const $_return = ($scope) => () => console.log("get", $scope.c);
_bind_resume("c0 c", $_return);

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
const $card_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(2, $inputtag_content);
const $card_content__input_tag__OR__get = /*@__PURE__*/ _or_patch("a4", 4, ($scope) => $card_content__dynamicTag($scope, $scope._._.f, ($_) => ({ onClick: $scope.d })), 1, 1);
const $card_content__get = _var_resume("a0", /*@__PURE__*/ _const(3, $card_content__input_tag__OR__get));
