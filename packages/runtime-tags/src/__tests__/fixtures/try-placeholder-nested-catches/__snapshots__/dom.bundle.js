// template.marko
const $await_content__value = ($scope, value) => _text($scope.a, value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $placeholder_content2 = /*@__PURE__*/ _content("a0", "inner loading");
pendingEnabled && (_resumed.a0 = $placeholder_content2);
const $placeholder_content = /*@__PURE__*/ _content("a3", "outer loading");
pendingEnabled && (_resumed.a3 = $placeholder_content);
const $try_content2__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $try_content2__count = /*@__PURE__*/ _closure_get(3, ($scope) => $try_content2__await_promise($scope, resolveAfter($scope._._.c)), ($scope) => $scope._._, "a2", 2);
const $count = /*@__PURE__*/ _let(2, /* @__PURE__ */ _closure($try_content2__count));
const $setup__script = _script("a5", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.c + 1);
}));
