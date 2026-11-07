// template.marko
const $if_content__copy__OR__$global_suffix = /*@__PURE__*/ _or_patch("a0", 1, ($scope) => _text($scope.a, $scope._.e + $scope.$.suffix));
const $if_content__count = /*@__PURE__*/ _if_closure(3, 0, $if_content__copy__OR__$global_suffix);
const $if_content__setup = ($scope) => {
	$if_content__count._($scope);
	$if_content__$global_suffix._($scope);
};
const $if_content__$global_suffix = /*@__PURE__*/ _if_closure_patch("a6", 3, 0, $if_content__copy__OR__$global_suffix);
const $if = /*@__PURE__*/ _if(3, "<b> </b>", "D ", $if_content__setup);
const $count__OR__$global_suffix = /*@__PURE__*/ _or_patch("a3", 5, ($scope) => _text($scope.b, $scope.e + $scope.$.suffix));
const $alias__OR__$global_suffix = /*@__PURE__*/ _or_patch("a4", 6, ($scope) => _text($scope.c, $scope.e + $scope.$.suffix));
const $count = _let(4, ($scope) => {
	$if($scope, $scope.e ? 0 : 1);
	$count__OR__$global_suffix($scope);
	$alias__OR__$global_suffix($scope);
	$if_content__count($scope);
});
const $global_suffix = _fill_global("a1", ($scope) => {
	$count__OR__$global_suffix($scope);
	$alias__OR__$global_suffix($scope);
	$if_content__$global_suffix($scope);
}, "suffix");
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.e + 1);
}));
