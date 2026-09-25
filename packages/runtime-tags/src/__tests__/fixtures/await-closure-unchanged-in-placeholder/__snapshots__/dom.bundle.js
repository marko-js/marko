// template.marko
const $placeholder_content = _content("a2", "loading...");
const $await_content__count = /*@__PURE__*/ _closure_get(3, ($scope) => _text($scope.a, $scope._._.c), ($scope) => $scope._._, "a1", 2);
const $await_content__setup__script = _script("a0", ($scope) => $signal($scope, 0).onabort = () => {});
const $count = /*@__PURE__*/ _let(2, /* @__PURE__ */ _closure($await_content__count));
const $setup__script = _script("a4", ($scope) => _on($scope.a, "click", function() {
	$count($scope, 2);
}));
