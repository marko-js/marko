// tags/heading.marko
const $item_content__input_text = /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.b, $scope._.e), 0, "c0", 4);
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("c1", "item <!> <!>", "b%c%", $item_content__input_text), { 2($scope) {
	_text($scope.a, $scope.c);
} });
_content_resume($item_content, 1);

// tags/card.marko
const $for_content__item_content = /* @__PURE__ */ _dynamic_tag(0);
const $for_content__$params = ($scope, $params2) => $for_content__item_content($scope, $params2[0]?.content);
const $if_content__for = /*@__PURE__*/ _for_of_unkeyed(0, "<!><!><!>", "b%", 0, $for_content__$params);
const $if_content__input_item = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__for($scope, [$scope._.e]));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_item);
const $open = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));
