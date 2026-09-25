// tags/heading.marko
const $item_content__input_text = /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.a, $scope._.e), 0, "c0", 4);
const $item_content = _content("c1", "text <!>", "b%", $item_content__input_text);
_content_resume($item_content);

// tags/card.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_item_content = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.f));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_item_content);
const $open = /*@__PURE__*/ _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));
