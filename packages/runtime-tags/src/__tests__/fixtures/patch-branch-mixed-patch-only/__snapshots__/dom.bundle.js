// template.marko
const $if = /*@__PURE__*/ _if(0, "<p>over</p>");
const $input_min__OR__count = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _or(6, ($scope) => $if($scope, $scope.f > $scope.e ? 0 : 1)));
const $count = /*@__PURE__*/ _let(5, $input_min__OR__count);
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.f + 1);
}));
