// template.marko
const $await_content__v = ($scope, v) => _text($scope.a, v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $count__$global_suffix = /*@__PURE__*/ _fill_global_join("suffix", "a2", ($scope) => $await_promise($scope, Promise.resolve($scope.d + $scope.$.suffix)));
const $count = /*@__PURE__*/ _fill_let("a4", 3, ($scope) => {
	_text($scope.c, $scope.d);
	$count__$global_suffix($scope);
});
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.d + 1);
}));
