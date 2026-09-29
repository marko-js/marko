// template.marko
const $if = /*@__PURE__*/ _if(1, "<p>ok</p>");
const $count__OR__rest = /*@__PURE__*/ _fill_join("a0", 7, /*@__PURE__*/ _or(8, ($scope) => $if($scope, $scope.h && $scope.f > 1 ? 0 : 1)));
const $count = /*@__PURE__*/ _let(5, $count__OR__rest);
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$count($scope, $scope.f + 1);
}));
