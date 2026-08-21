// template.marko
const $if_content__greeting = /*@__PURE__*/ _fill_join("a0", 5, /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.a, $scope._.f)));
const $if_content__setup = ($scope) => {
	$if_content__greeting._($scope);
	$if_content__count._($scope);
};
const $if_content__count = /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.b, $scope._.g));
const $if = /*@__PURE__*/ _if(1, "<span><!> <!></span>", "D%c%", $if_content__setup);
const $count = /*@__PURE__*/ _let(6, ($scope) => {
	$if($scope, $scope.g < 2 ? 0 : 1);
	$if_content__count($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.g + 1);
}));
