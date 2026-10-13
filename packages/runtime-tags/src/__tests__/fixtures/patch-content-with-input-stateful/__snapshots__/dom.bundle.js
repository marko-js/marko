// tags/card.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _fill_join("b1", 5, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.f, () => ({ x: 1 }))));
const $if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__input_content);
const $open = /*@__PURE__*/ _fill_let("b2", 6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.g);
}));

// template.marko
const $card_content__input_note = /*@__PURE__*/ _fill_join_closure("a2", 4, _closure_get(5, ($scope) => _text($scope.b, $scope._.e), 0, "a0"), 0);
const $card_content__setup = $card_content__input_note;
const $card_content__x = ($scope, x) => _text($scope.a, x);
const $card_content__$params = ($scope, $params2) => $card_content__x($scope, $params2[0].x);
const $card_content = _content("a1", "<em><!>:<!></em>", "D%c%", $card_content__setup, $card_content__$params);
