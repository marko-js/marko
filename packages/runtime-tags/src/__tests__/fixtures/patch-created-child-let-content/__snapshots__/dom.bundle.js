// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = /*@__PURE__*/ _fill_let("b1", 5, ($scope) => $dynamicTag($scope, $scope.f));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $card_content__input_label = /*@__PURE__*/ _fill_join_closure("a3", 4, /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.a, $scope._._.e), ($scope) => $scope._._, "a1"), 0);
const $card_content = _content$1("a2", "<em>static <!></em>", "Db%", $card_content__input_label);
