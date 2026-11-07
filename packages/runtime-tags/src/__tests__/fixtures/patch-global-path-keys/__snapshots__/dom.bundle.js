// template.marko
const $if_content__$global_o_x = /*@__PURE__*/ _if_closure_patch("a7", 1, 0, ($scope) => _text($scope.a, $scope.$.o.x.toUpperCase()));
const $if_content__setup = ($scope) => {
	$if_content__$global_o_x._($scope);
	$if_content__$global_o_list_length._($scope);
	$if_content__$global_o_a_b._($scope);
	$if_content__$global_c_d._($scope);
	$if_content__$global_p_x._($scope);
};
const $if_content__$global_o_list_length = /*@__PURE__*/ _if_closure_patch("a8", 1, 0, ($scope) => _text($scope.b, $scope.$.o.list.length));
const $if_content__$global_o_a_b = /*@__PURE__*/ _if_closure_patch("a9", 1, 0, ($scope) => _text($scope.c, $scope.$.o["a.b"]));
const $if_content__$global_c_d = /*@__PURE__*/ _if_closure_patch("a10", 1, 0, ($scope) => _text($scope.d, $scope.$["c.d"]));
const $if_content__$global_p_x = /*@__PURE__*/ _if_closure_patch("a11", 1, 0, ($scope) => _text($scope.e, $scope.$.p?.x));
const $if = /*@__PURE__*/ _if(1, "<p> </p><b> </b><i> </i><u> </u><s> </s>", "D lD lD lD lD ", $if_content__setup);
const $open = _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $global_o_x = _fill_global_path("a0", $if_content__$global_o_x, "o", "x");
const $global_o_list_length = _fill_global_path("a1", $if_content__$global_o_list_length, "o", "list", "length");
const $global_o_a_b = _fill_global_path("a2", $if_content__$global_o_a_b, "o", "a.b");
const $global_c_d = _fill_global("a3", $if_content__$global_c_d, "c.d");
const $global_p_x = _fill_global_path("a4", $if_content__$global_p_x, "p", "x");
const $setup__script = _script("a5", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.c);
}));
