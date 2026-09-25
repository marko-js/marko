// tags/child.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__item_content = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.d));
const $await_content__if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__item_content);
const $await_content__show = /*@__PURE__*/ _closure_get(6, ($scope) => $await_content__if($scope, $scope._.f ? 0 : 1), 0, "b0", 5);
const $show = /*@__PURE__*/ _let(5, /* @__PURE__ */ _closure($await_content__show));
const $setup__script$1 = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$show($scope, true);
}));

// template.marko
const $item_content__count = /*@__PURE__*/ _closure_get(3, ($scope) => _text($scope.a, $scope._.c), 0, "a0", 2);
const $item_content = _content("a1", "Item <!>", "b%", $item_content__count);
const $count = /*@__PURE__*/ _let(2, /* @__PURE__ */ _closure($item_content__count));
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.c + 1);
}));
