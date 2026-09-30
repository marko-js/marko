// tags/list.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__item_content = /*@__PURE__*/ _fill_join("b1", 3, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.d)));
const $for_content__if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__item_content);
const $for_content__open = _init_for_closure("b5", 1, ($scope) => $for_content__if($scope, $scope._.f ? 0 : 1));
const $open = /*@__PURE__*/ _fill_let("b3", 5, $for_content__open);
const $setup__script = _script("b2", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));

// template.marko
const $item_content__input_note = /*@__PURE__*/ _fill_join_closure("a2", 4, _closure_get(5, ($scope) => _text($scope.b, $scope._.e), 0, "a0"), 0);
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content$1("a1", "<em><!>:<!></em>", "D%c%", $item_content__input_note), { 2($scope) {
	_text($scope.a, $scope.c);
} });
_resumed.a1 = $item_content;
