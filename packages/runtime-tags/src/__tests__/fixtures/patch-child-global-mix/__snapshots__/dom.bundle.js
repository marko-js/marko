// tags/gm-badge/index.marko
const $input_value__OR__$global_flag = /*@__PURE__*/ _or_patch("b1", 4, ($scope) => _text($scope.a, $scope.d + $scope.$.flag));
const $input_value = /*@__PURE__*/ _const(3, $input_value__OR__$global_flag);
const $global_flag = _fill_global("b0", $input_value__OR__$global_flag, "flag");

// template.marko
const $count = _let(2, ($scope) => $input_value($scope.a, $scope.c));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.c + 1);
}));
