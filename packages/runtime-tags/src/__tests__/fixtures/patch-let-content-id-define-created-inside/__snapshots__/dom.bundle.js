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
const $Inner_content__input_label = /*@__PURE__*/ _closure_get_patch("a1", 5, ($scope) => _text($scope.c, $scope._._.d), ($scope) => $scope._._, "a4", 0);
const $Inner_content__uid = ($scope, uid) => {
	_attr($scope.a, "id", uid);
	_attr($scope.b, "for", uid);
};
const $Inner_content__setup = ($scope) => {
	$Inner_content__input_label($scope);
	$Inner_content__uid($scope, _id($scope));
};
const $Inner_content = _content$1("a0", "<input><label> </label>", " b D ", $Inner_content__setup);
const $card_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $card_content__input_on__OR__Inner = /*@__PURE__*/ _or(2, ($scope) => $card_content__dynamicTag($scope, $scope._.e ? $scope.b : null));
const $card_content__input_on = /*@__PURE__*/ _closure_get_patch("a2", 6, $card_content__input_on__OR__Inner, 0, "a5", 0);
const $card_content__Inner = /*@__PURE__*/ _const(1, $card_content__input_on__OR__Inner);
const $card_content__setup = ($scope) => {
	$card_content__input_on($scope);
	$card_content__Inner($scope, { content: $Inner_content($scope) });
};
const $card_content = _content$1("a3", "<!><!><!>", "b%", $card_content__setup);
