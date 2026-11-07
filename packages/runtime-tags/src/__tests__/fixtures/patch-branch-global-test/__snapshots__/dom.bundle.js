// template.marko
const $if = /*@__PURE__*/ _if(0, "<p>big</p>");
const $count__OR__$global_enabled = /*@__PURE__*/ _or_patch("a2", 3, ($scope) => $if($scope, $scope.$.enabled && $scope.c > 1 ? 0 : 1));
const $count = _let(2, $count__OR__$global_enabled);
const $global_enabled = _fill_global("a0", $count__OR__$global_enabled, "enabled");
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.c + 1);
}));
