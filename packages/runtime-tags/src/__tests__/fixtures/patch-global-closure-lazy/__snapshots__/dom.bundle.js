// child.marko
const $for_content__x = ($scope, x) => _text($scope.a, x);
const $for_content__setup = /* @__PURE__ */ _fill_global_for("a0", 0, ($scope) => _text($scope.b, $scope.$.brand), "brand");
const $for_content__$params = ($scope, $params2) => $for_content__x($scope, $params2[0]);
const $if_content__for = /*@__PURE__*/ _for_of_unkeyed(0, "<i><!><!></i>", "D%b%", $for_content__setup, $for_content__$params);
const $if_content__setup = ($scope) => $if_content__for($scope, [[1, 2]]);
const $if = /*@__PURE__*/ _if(2, "<!><!><!>", "b%", $if_content__setup);
const $on = _let(3, ($scope) => $if($scope, $scope.d ? 0 : 1));
const $count = /*@__PURE__*/ _fill_let("a4", 4, ($scope) => _text($scope.b, $scope.e));
const $setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.e + 1);
}));
