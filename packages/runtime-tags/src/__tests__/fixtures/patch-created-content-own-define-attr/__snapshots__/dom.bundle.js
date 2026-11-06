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
const $Inner_content__input_label = /*@__PURE__*/ _closure_get_patch("a1", 8, ($scope) => _text($scope.a, $scope._._.d), ($scope) => $scope._._, "a6", 0);
const $Inner_content = _content$1("a0", "<b> </b>", "D ", $Inner_content__input_label);
const $Body_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $Body_content__input_tag__OR__Inner = /*@__PURE__*/ _or_patch("a4", 2, ($scope) => $Body_content__dynamicTag($scope, $scope._.e, ($_) => ({ content: $scope.b })));
const $Body_content__input_tag = /*@__PURE__*/ _closure_get_patch("a3", 9, $Body_content__input_tag__OR__Inner, 0, "a7", 0);
const $Body_content__Inner = /*@__PURE__*/ _const(1, $Body_content__input_tag__OR__Inner);
const $Body_content__setup = ($scope) => {
	$Body_content__input_tag($scope);
	$Body_content__Inner($scope, { content: $Inner_content($scope) });
};
const $Body_content = _content$1("a2", "<!><!><!>", "b%", $Body_content__setup);
