// tags/label-text.marko
const $input_v = ($scope, input_v) => _text($scope.a, input_v);

// tags/pass.marko
const $input_x__OR__$global_suffix = /*@__PURE__*/ _or_patch("c1", 4, ($scope) => $input_v($scope.a, $scope.d + $scope.$.suffix));
const $global_suffix = _fill_global("c0", $input_x__OR__$global_suffix, "suffix");

// template.marko
const $count = _let(3, ($scope) => _text($scope.c, $scope.d));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.d + 1);
}));
