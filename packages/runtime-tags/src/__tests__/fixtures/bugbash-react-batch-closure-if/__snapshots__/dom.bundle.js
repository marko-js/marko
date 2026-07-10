// template.marko
const $if_content2__count = /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.a, $scope._.e));
const $if_content2__setup = $if_content2__count;
const $if_content__count = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.e));
const $if = /*@__PURE__*/ _if(0, "<span>a:<!></span>", "Db%l", $if_content__count);
const $if2 = /*@__PURE__*/ _if(1, "<span>b:<!></span>", "Db%l", $if_content2__setup);
const $show = /*@__PURE__*/ _let(3, ($scope) => {
	$if($scope, $scope.d ? 0 : 1);
	$if2($scope, !$scope.d ? 0 : 1);
});
const $count = /*@__PURE__*/ _let(4, ($scope) => {
	$if_content__count($scope);
	$if_content2__count($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$show($scope, !$scope.d);
	$count($scope, $scope.e + 1);
}));
