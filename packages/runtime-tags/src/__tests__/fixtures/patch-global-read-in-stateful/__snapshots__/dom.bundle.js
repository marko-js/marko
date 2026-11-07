// template.marko
const $if_content__$global_brand = /*@__PURE__*/ _if_closure_patch("a3", 1, 0, ($scope) => _text($scope.a, $scope.$.brand));
const $if = /*@__PURE__*/ _if(1, "<em> </em>", "D ", $if_content__$global_brand);
const $on = _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $global_brand = _fill_global("a0", $if_content__$global_brand, "brand");
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$on($scope, !$scope.c);
}));
