// tags/label-text.marko
const $input_v = ($scope, input_v) => _text($scope.a, input_v);

// template.marko
const $count__OR__$global_suffix = /*@__PURE__*/ _global_or(($scope) => $input_v($scope.a, $scope.d + $scope.$.suffix), /* @__PURE__ */ _global_closure(/* @__PURE__ */ _global_key("suffix"), "a0"));
const $count = _let(3, ($scope) => {
	_text($scope.c, $scope.d);
	$count__OR__$global_suffix($scope);
});
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.d + 1);
}));
