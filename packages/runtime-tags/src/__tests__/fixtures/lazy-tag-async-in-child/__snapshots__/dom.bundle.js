// child.marko
const $await_content__count__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope._, $scope._.e + 1);
}));
const $await_content__count = /*@__PURE__*/ _closure_get(4, ($scope) => {
	_text($scope.b, $scope._.e);
	$await_content__count__script($scope);
});
const $count = /*@__PURE__*/ _let(4, /* @__PURE__ */ _closure($await_content__count));
