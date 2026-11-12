// template.marko
const $global_suffix_key = /*@__PURE__*/ _global_key(9, "suffix");
const $if_content__$global_suffix = /*@__PURE__*/ _global_if("a1", $global_suffix_key, 3, 0);
const $if_content__count = /*@__PURE__*/ _if_closure(3, 0, /* @__PURE__ */ _global_or(1, ($scope) => _text($scope.a, $scope._.e + $scope.$.suffix), $if_content__$global_suffix));
const $if_content__setup = ($scope) => {
	$if_content__count._($scope);
	$if_content__$global_suffix($scope);
};
const $if = /*@__PURE__*/ _if(3, "<b> </b>", "D ", $if_content__setup);
const $global_suffix = /*@__PURE__*/ _global_closure("a0", $global_suffix_key);
const $count__OR__$global_suffix = /*@__PURE__*/ _global_or(5, ($scope) => _text($scope.b, $scope.e + $scope.$.suffix), $global_suffix);
const $alias__OR__$global_suffix = /*@__PURE__*/ _global_or(6, ($scope) => _text($scope.c, $scope.e + $scope.$.suffix), $global_suffix);
const $count = _let(4, ($scope) => {
	$if($scope, $scope.e ? 0 : 1);
	$count__OR__$global_suffix($scope);
	$alias__OR__$global_suffix($scope);
	$if_content__count($scope);
});
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.e + 1);
}));
