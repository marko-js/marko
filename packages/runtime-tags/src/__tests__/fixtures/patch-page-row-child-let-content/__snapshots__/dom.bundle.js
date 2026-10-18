// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = /*@__PURE__*/ _fill_let("b1", 8, ($scope) => $dynamicTag($scope, $scope.i));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $card_content__input_label = /*@__PURE__*/ _fill_join_closure("a5", 4, /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.b, $scope._._.e), ($scope) => $scope._._, "a1"), 0);
const $card_content__setup = ($scope) => {
	$card_content__input_label($scope);
	$card_content__row_id($scope);
};
const $card_content__row_id = /*@__PURE__*/ _fill_join_closure("a4", 4, /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.a, $scope._.e), 0, "a2"), 0);
const $card_content = _content$1("a3", "<em><!> <!></em>", "D%c%", $card_content__setup);
