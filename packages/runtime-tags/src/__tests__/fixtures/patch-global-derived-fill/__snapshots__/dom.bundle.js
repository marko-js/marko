// template.marko
const $if_content__greeting = /*@__PURE__*/ _if_closure_patch("a0", 1, 0, ($scope) => _text($scope.a, $scope._.f));
const $if_content__setup = ($scope) => {
	$if_content__greeting._($scope);
	$if_content__count._($scope);
};
const $if_content__count = /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.b, $scope._.g));
const $greeting = /*@__PURE__*/ _const(5, $if_content__greeting);
const $input_name__OR__$global_prefix = /*@__PURE__*/ _or_patch("a3", 7, ($scope) => $greeting($scope, $scope.$.prefix + ":" + $scope.e));
const $global_prefix = _fill_global("a1", $input_name__OR__$global_prefix, "prefix");
const $if = /*@__PURE__*/ _if(1, "<span><!> <!></span>", "D%c%", $if_content__setup);
const $count = _let(6, ($scope) => {
	$if($scope, $scope.g < 2 ? 0 : 1);
	$if_content__count($scope);
});
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.g + 1);
}));
