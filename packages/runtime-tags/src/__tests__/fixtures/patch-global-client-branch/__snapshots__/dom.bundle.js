// template.marko
const $if_content__input_name__OR__$global_brand = /*@__PURE__*/ _or_patch("a0", 2, ($scope) => _text($scope.b, $scope._.e + ":" + $scope.$.brand));
const $if_content__input_name = /*@__PURE__*/ _if_closure_patch("a3", 1, 0, $if_content__input_name__OR__$global_brand);
const $if_content__setup = ($scope) => {
	$if_content__input_name._($scope);
	$if_content__$global_brand._($scope);
};
const $if_content__$global_brand = /*@__PURE__*/ _if_closure_patch("a5", 1, 0, ($scope) => {
	_text($scope.a, $scope.$.brand);
	$if_content__input_name__OR__$global_brand($scope);
});
const $if = /*@__PURE__*/ _if(1, "<p> </p><b> </b>", "D lD ", $if_content__setup);
const $open = _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $global_brand = _fill_global("a1", $if_content__$global_brand, "brand");
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));
