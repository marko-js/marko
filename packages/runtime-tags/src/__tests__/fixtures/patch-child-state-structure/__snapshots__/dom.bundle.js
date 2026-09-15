// tags/toggle-panel/index.marko
const $if = /*@__PURE__*/ _if(0, "<em>on</em>");
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);

// template.marko
const $count = /*@__PURE__*/ _let(2, ($scope) => $input_show($scope.a, $scope.c % 2 === 0));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.c + 1);
}));
