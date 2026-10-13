// template.marko
const $if_content__$global_brand = /*@__PURE__*/ _fill_global_join("brand", "a0", ($scope) => {
	_text($scope.a, $scope.$.brand);
});
const $if_content__setup = ($scope) => $if_content__$global_brand($scope);
const $if = /*@__PURE__*/ _if(1, "<em> </em>", "D ", $if_content__setup);
const $on = /*@__PURE__*/ _fill_let("a2", 2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$on($scope, !$scope.c);
}));
