// tags/tree.marko
const $tree_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $tree_content__input_content = /*@__PURE__*/ _closure_get(6, ($scope) => $tree_content__dynamicTag($scope, $scope._._.e), ($scope) => $scope._._, "b0");
const $tree_content = _content("b1", "<!><!><!>", "b%", $tree_content__input_content);

// template.marko
const $tree_content__n = /*@__PURE__*/ _closure_get(3, ($scope) => _text($scope.a, $scope._.c), 0, "a0");
const $n = /*@__PURE__*/ _let(2, /* @__PURE__ */ _closure($tree_content__n));
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.c + 1);
}));
