// template.marko
const $if_content__input_name = /*@__PURE__*/ _fill_signal("4 a3", /*@__PURE__*/ _if_closure(1, 0, /* @__PURE__ */ _fill_global_join("a0", ($scope) => _text($scope.b, $scope._.e + ":" + $scope.$.brand), "brand")));
const $if_content__setup__$global_brand = /*@__PURE__*/ _fill_global_join("a1", ($scope) => _text($scope.a, $scope.$.brand), "brand");
const $if_content__setup = ($scope) => {
	$if_content__input_name._($scope);
	$if_content__setup__$global_brand($scope);
};
const $if = /*@__PURE__*/ _if(1, "<p> </p><b> </b>", "D lD ", $if_content__setup);
const $open = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));
