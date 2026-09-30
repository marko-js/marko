// template.marko
const $if_content__input_name__OR__$global_brand = /*@__PURE__*/ _global_join("brand", "a1", /*@__PURE__*/ _fill_join_if("a3", 4, /*@__PURE__*/ _or(2, ($scope) => _text($scope.b, $scope._.e + ":" + $scope.$.brand)), 0, 1, 0));
const $if_content__input_name = /*@__PURE__*/ _if_closure(1, 0, $if_content__input_name__OR__$global_brand);
const $if_content__setup = ($scope) => {
	$if_content__input_name._($scope);
	$if_content__$global_brand._($scope);
};
const $if_content__$global_brand = /*@__PURE__*/ _global_join("brand", "a0", /*@__PURE__*/ _if_closure(1, 0, ($scope) => {
	_text($scope.a, $scope.$.brand);
	$if_content__input_name__OR__$global_brand($scope);
}));
const $if = /*@__PURE__*/ _if(1, "<p> </p><b> </b>", "D lD ", $if_content__setup);
const $open = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));
