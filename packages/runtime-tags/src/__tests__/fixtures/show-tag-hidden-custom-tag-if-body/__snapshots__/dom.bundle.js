// tags/conditional.marko
const $if = /*@__PURE__*/ _if(0, "<b>B</b>");
const $input_on = ($scope, input_on) => $if($scope, input_on ? 0 : 1);

// template.marko
const $show = /*@__PURE__*/ _show(4, 2);
const $visible = /*@__PURE__*/ _let(5, ($scope) => $show($scope, $scope.f));
const $inner = /*@__PURE__*/ _let(6, ($scope) => $input_on($scope.d, $scope.g));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$visible($scope, !$scope.f);
	});
	_on($scope.b, "click", function() {
		$inner($scope, !$scope.g);
	});
});
