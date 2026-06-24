// template.marko
const $child_content__count__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope._, $scope._.b + 1);
}));
const $child_content__count = /*@__PURE__*/ _closure_get(1, ($scope) => {
	_text($scope.b, $scope._.b);
	$child_content__count__script($scope);
});
const $count = /*@__PURE__*/ _let(1, /* @__PURE__ */ _closure($child_content__count));
