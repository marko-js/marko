// template.marko
const $if_content__count__script = _script("a0", ($scope) => console.log(`closure ${$scope._.d}`));
const $if_content__count = /*@__PURE__*/ _if_closure(2, 0, $if_content__count__script);
const $if_content__setup__script = _script("a1", ($scope) => console.log("setup"));
const $if_content__setup = ($scope) => {
	$if_content__count._($scope);
	$if_content__setup__script($scope);
};
const $if = /*@__PURE__*/ _if(2, 0, 0, $if_content__setup);
const $count = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$if($scope, $scope.d ? 0 : 1);
	$if_content__count($scope);
});
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.d + 1);
}));
