// template.marko
const $if_content__$global_brand = /*@__PURE__*/ _if_closure_patch("a3", 0, 0, ($scope) => _text($scope.a, $scope.$.brand));
const $if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content__$global_brand);
const $count = _let(2, ($scope) => $if($scope, $scope.c > 1 ? 0 : 1));
const $global_brand = _fill_global("a0", $if_content__$global_brand, "brand");
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.c + 1);
}));
