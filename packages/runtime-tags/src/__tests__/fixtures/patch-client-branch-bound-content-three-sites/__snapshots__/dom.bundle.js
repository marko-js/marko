// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag(2);
const $dynamicTag3 = /*@__PURE__*/ _dynamic_tag(3);
const $c = _let(7, ($scope) => {
	$dynamicTag($scope, $scope.h);
	$dynamicTag2($scope, $scope.h);
	$dynamicTag3($scope, $scope.h);
});
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $Inner_content__input_label = /*@__PURE__*/ _closure_get_patch("a2", 6, ($scope) => _text($scope.b, $scope._._._.e), ($scope) => $scope._._._, "a6", 0);
const $Inner_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	console.log("inner", $scope._._._.e);
}));
const $Inner_content__setup = ($scope) => {
	$Inner_content__input_label($scope);
	$Inner_content__setup__script($scope);
};
const $Inner_content = _content$1("a0", "<b> </b>", " D ", $Inner_content__setup);
const $card_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $card_content__input_tag__OR__Inner = /*@__PURE__*/ _or(2, ($scope) => $card_content__dynamicTag($scope, $scope._._.f, ($_) => ({ content: $scope.b })));
const $card_content__input_tag = /*@__PURE__*/ _closure_get_patch("a3", 7, $card_content__input_tag__OR__Inner, ($scope) => $scope._._, "a7", 0);
const $card_content__Inner = /*@__PURE__*/ _const(1, $card_content__input_tag__OR__Inner);
const $card_content__setup = ($scope) => {
	$card_content__input_tag($scope);
	$card_content__Inner($scope, { content: $Inner_content($scope) });
};
const $card_content = _content$1("a4", "<!><!><!>", "b%", $card_content__setup);
