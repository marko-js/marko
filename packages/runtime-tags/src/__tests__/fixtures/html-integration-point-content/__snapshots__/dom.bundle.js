// template.marko
const $if = /*@__PURE__*/ _if(0, "<input value=if>");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $if2 = /*@__PURE__*/ _if(4, "<input value=hidden>");
const $if3 = /*@__PURE__*/ _if(5, "<a>desc</a>");
const $if4 = /*@__PURE__*/ _if(6, "<a>mtext</a>");
const $editing = /*@__PURE__*/ _let(9, ($scope) => {
	_html($scope, $scope.j ? "<input value=html>" : "", "c");
	$if($scope, $scope.j ? 0 : 1);
	$dynamicTag($scope, $scope.j && "input", () => ({ value: "dynamic" }));
	$if2($scope, $scope.j ? 0 : 1);
	$if3($scope, $scope.j ? 0 : 1);
	$if4($scope, $scope.j ? 0 : 1);
});
const $show = /*@__PURE__*/ _show(3);
const $visible = /*@__PURE__*/ _let(10, ($scope) => $show($scope, $scope.k));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.h, "click", function() {
		$editing($scope, !$scope.j);
	});
	_on($scope.i, "click", function() {
		$visible($scope, !$scope.k);
	});
});
