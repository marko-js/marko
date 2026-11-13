// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $Inner_content__input_label = /*@__PURE__*/ _closure_get_patch("a1", 8, ($scope) => _text($scope.a, $scope._._._._.f), ($scope) => $scope._._._._, "a7", 0);
const $Inner_content = _content$1("a0", "<b> </b>", "D ", $Inner_content__input_label);
const $if_content2__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content2__input_tag__OR__Inner = /*@__PURE__*/ _or(2, ($scope) => $if_content2__dynamicTag($scope, $scope._._._.g, ($_) => ({ content: $scope.b })));
const $if_content2__input_tag = /*@__PURE__*/ _closure_get_patch("a2", 9, $if_content2__input_tag__OR__Inner, ($scope) => $scope._._._, "a8", 0);
const $if_content2__Inner = /*@__PURE__*/ _const(1, $if_content2__input_tag__OR__Inner);
const $if_content2__setup = ($scope) => {
	$if_content2__input_tag($scope);
	$if_content2__Inner($scope, { content: $Inner_content($scope) });
};
const $card_content__if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content2__setup);
const $card_content__input_inner = /*@__PURE__*/ _closure_get_patch("a3", 7, ($scope) => $card_content__if($scope, $scope._._.e ? 0 : 1), ($scope) => $scope._._, "a6", 0);
const $card_content = _content$1("a4", "<!><!><!>", "b%", $card_content__input_inner);
