// template.marko
const $if_content__greeting = /*@__PURE__*/ _fill_join("a2", 5, /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.a, $scope._.f)));
const $if_content__setup = ($scope) => {
	$if_content__greeting._($scope);
	$if_content__count._($scope);
};
const $if_content__count = /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.b, $scope._.i));
const $if = /*@__PURE__*/ _if(1, "<span><!> <!></span>", "D%c%", $if_content__setup);
const $count = /*@__PURE__*/ _fill_let("a3", 8, ($scope) => {
	$if($scope, $scope.i < 2 ? 0 : 1);
	$if_content__count($scope);
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.i + 1);
}));
