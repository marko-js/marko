// template.marko
const $if = /*@__PURE__*/ _if(0, "<p>over</p>");
const $count__OR__input_min = /*@__PURE__*/ _fill_join("a0", 5, /*@__PURE__*/ _or(6, ($scope) => $if($scope, $scope.e > $scope.f ? 0 : 1)));
const $count = /*@__PURE__*/ _let(4, $count__OR__input_min);
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.e + 1);
}));
