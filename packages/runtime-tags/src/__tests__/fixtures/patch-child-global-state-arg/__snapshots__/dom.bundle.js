// tags/label-text.marko
const $input_v = ($scope, input_v) => _text($scope.a, input_v);

// template.marko
const $count__OR__$global_suffix = /*@__PURE__*/ _or_patch("a2", 4, ($scope) => $input_v($scope.a, $scope.d + $scope.$.suffix));
const $count = _let(3, ($scope) => {
	_text($scope.c, $scope.d);
	$count__OR__$global_suffix($scope);
});
const $global_suffix = _fill_global("a0", $count__OR__$global_suffix, "suffix");
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.d + 1);
}));
