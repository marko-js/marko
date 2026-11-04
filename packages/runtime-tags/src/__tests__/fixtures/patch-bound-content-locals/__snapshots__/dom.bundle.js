// tags/list.marko
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $for_content__$params = ($scope, $params2) => $for_content__dynamicTag($scope, $params2[0]?.content);
const $for = /*@__PURE__*/ _for_of_unkeyed(1, "<!><!><!>", "b%", 0, $for_content__$params);
const $items = /*@__PURE__*/ _fill_let("b1", 5, ($scope) => $for($scope, [$scope.f]));
const $setup__script$1 = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$items($scope, [...$scope.f]);
}));

// template.marko
const $item_content__n = /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.b, $scope._._.g), ($scope) => $scope._._, "a0");
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content$1("a1", "<em><!> <!></em>", "D%c%", $item_content__n), { 2: ($scope) => _text($scope.a, $scope.c) });
_resumed.a1 = $item_content;
const $n = _let(6, /* @__PURE__ */ _closure($item_content__n));
const $setup__script = _script("a4", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.g + 1);
}));
