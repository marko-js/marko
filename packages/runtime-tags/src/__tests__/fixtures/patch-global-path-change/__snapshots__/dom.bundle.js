// template.marko
const $if_content__$global_o_x = /*@__PURE__*/ _if_closure_patch("a6", 1, 0, ($scope) => _text($scope.a, $scope.$.o.x));
const $if = /*@__PURE__*/ _if(1, "<p> </p>", "D ", $if_content__$global_o_x);
const $open = _let(3, ($scope) => $if($scope, $scope.d ? 0 : 1));
const $global_o_x__OR__$global_k__script = _script("a2", ($scope) => $scope.c.textContent = $scope.$.o.x + $scope.$.k);
const $global_o_x__OR__$global_k = /*@__PURE__*/ _or_patch("a4", 4, $global_o_x__OR__$global_k__script);
const $global_o_x = _fill_global_path("a0", ($scope) => {
	$global_o_x__OR__$global_k($scope);
	$if_content__$global_o_x($scope);
}, "o", "x");
const $global_k = _fill_global("a1", $global_o_x__OR__$global_k, "k");
const $setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.d);
}));
