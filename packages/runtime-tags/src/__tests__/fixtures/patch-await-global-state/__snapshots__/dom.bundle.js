// template.marko
const $await_content__$params = ($scope, $params2) => _text($scope.a, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $count__OR__$global_suffix = /*@__PURE__*/ _global_or(($scope) => $await_promise($scope, Promise.resolve($scope.d + $scope.$.suffix)), /* @__PURE__ */ _global_closure(/* @__PURE__ */ _global_key("suffix"), "a2"));
const $count = _let(3, ($scope) => {
	_text($scope.c, $scope.d);
	$count__OR__$global_suffix($scope);
});
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.d + 1);
}));
