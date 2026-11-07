// child.marko
const $for_content__$global_brand = /*@__PURE__*/ _closure_get_patch("a0", 5, ($scope) => _text($scope.b, $scope.$.brand), ($scope) => $scope._._);
const $for_content__setup = $for_content__$global_brand;
const $for_content__$params = ($scope, $params2) => _text($scope.a, $params2[0]);
const $if_content__for = /*@__PURE__*/ _for_of_unkeyed(0, "<i><!><!></i>", "D%b%", $for_content__setup, $for_content__$params);
const $if_content__setup = ($scope) => $if_content__for($scope, [[1, 2]]);
const $if = /*@__PURE__*/ _if(2, "<!><!><!>", "b%", $if_content__setup);
const $on = _fill_let("a3", 3, ($scope) => $if($scope, $scope.d ? 0 : 1));
const $count = /*@__PURE__*/ _fill_let("a4", 4, ($scope) => _text($scope.b, $scope.e));
const $global_brand = _fill_global("a1", /* @__PURE__ */ _closure($for_content__$global_brand), "brand");
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.e + 1);
}));
