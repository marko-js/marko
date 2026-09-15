// template.marko
const $if = /*@__PURE__*/ _if(0, "<p>over</p>");
const $count__OR__m = /*@__PURE__*/ _fill_join("a0", 6, /*@__PURE__*/ _or(7, ($scope) => $if($scope, $scope.f > $scope.g ? 0 : 1)));
const $count = /*@__PURE__*/ _let(5, $count__OR__m);
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.f + 1);
}));
