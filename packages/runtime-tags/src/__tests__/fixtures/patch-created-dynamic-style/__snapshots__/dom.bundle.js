// tags/bar.marko
const $pct = /*@__PURE__*/ _const(8, ($scope) => _style_rule_item($scope.a, "--M_b0", $scope.i + "px"));
const $input_pct = ($scope, input_pct) => $pct($scope, Math.round(Math.max(0, Math.min(100, input_pct))));

// tags/route-bar.marko
const $w = /*@__PURE__*/ _fill_let("c1", 2, ($scope) => $input_pct($scope.a, $scope.c));
const $setup__script = _script("c0", ($scope) => _on($scope.b, "click", function() {
	$w($scope, $scope.c + 10);
}));
