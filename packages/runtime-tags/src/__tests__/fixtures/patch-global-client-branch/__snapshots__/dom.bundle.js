// template.marko
const $if_content__$global_brand = /*@__PURE__*/ _global_if("a0", /* @__PURE__ */ _global_key(8, "brand"), 1, 0, ($scope) => _text($scope.a, $scope.$.brand));
const $if_content__input_name = /*@__PURE__*/ _if_closure_patch("a2", 1, 0, /* @__PURE__ */ _global_or(2, ($scope) => _text($scope.b, $scope._.e + ":" + $scope.$.brand), $if_content__$global_brand));
const $if_content__setup = ($scope) => {
	$if_content__input_name._($scope);
	$if_content__$global_brand($scope);
};
const $if = /*@__PURE__*/ _if(1, "<p> </p><b> </b>", "D lD ", $if_content__setup);
const $open = _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));
