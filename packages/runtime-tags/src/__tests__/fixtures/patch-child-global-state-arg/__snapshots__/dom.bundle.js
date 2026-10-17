// tags/label-text.marko
const $input_v = ($scope, input_v) => _text($scope.a, input_v);

// template.marko
const $count__$global_suffix = /*@__PURE__*/ _fill_global_join("suffix", "a0", ($scope) => $input_v($scope.a, $scope.d + $scope.$.suffix));
const $count = /*@__PURE__*/ _fill_let("a2", 3, ($scope) => {
	_text($scope.c, $scope.d);
	$count__$global_suffix($scope);
});
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.d + 1);
}));
