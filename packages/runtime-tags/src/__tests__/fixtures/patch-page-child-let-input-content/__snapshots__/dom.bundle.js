// tags/card.marko
const $c = /*@__PURE__*/ _fill_let("b1", 4, ($scope) => $c_content($scope, $scope.e?.content));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c_content = /*@__PURE__*/ _const(5, ($scope) => $dynamicTag($scope, $scope.f));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, {});
}));

// template.marko
const $card_content__input_label = /*@__PURE__*/ _closure_get(4, ($scope) => _text($scope.a, $scope._.d), 0, "a0");
const $input_label__closure = /*@__PURE__*/ _closure($card_content__input_label);
const $input_label = fill("a2", /*@__PURE__*/ _const(3, $input_label__closure));
