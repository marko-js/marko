// template.marko
const $if_content__count = /*@__PURE__*/ _if_closure(3, 0, /* @__PURE__ */ _fill_global_join("suffix", "a0", ($scope) => _text($scope.a, $scope._.e + $scope.$.suffix)));
const $if = /*@__PURE__*/ _if(3, "<b> </b>", "D ", $if_content__count);
const $count__$global_suffix = /*@__PURE__*/ _fill_global_join("suffix", "a1", ($scope) => _text($scope.b, $scope.e + $scope.$.suffix));
const $count = /*@__PURE__*/ _fill_let("a4", 4, ($scope) => {
	$alias($scope, $scope.e);
	$if($scope, $scope.e ? 0 : 1);
	$count__$global_suffix($scope);
	$if_content__count($scope);
});
const $alias = /* @__PURE__ */ _fill_global_join("suffix", "a2", ($scope) => _text($scope.c, $scope.e + $scope.$.suffix));
const $setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.e + 1);
}));
