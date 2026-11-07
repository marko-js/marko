// tags/brand.marko
const $template = "<b> </b>";
const $global_brand$1 = /*@__PURE__*/ _fill_global("b0", ($scope) => _text($scope.a, $scope.$.brand), "brand");
const $setup = $global_brand$1;

// template.marko
const $if_content__$global_brand = /*@__PURE__*/ _if_closure_patch("a3", 1, 0, ($scope) => _text($scope.a, $scope.$.brand));
const $if_content__setup = ($scope) => {
	$if_content__$global_brand._($scope);
	$setup($scope.b);
};
const $if = /*@__PURE__*/ _if(1, /*@__PURE__*/ ((_w0) => `<em> </em>${_w0}`)($template), /*@__PURE__*/ ((_w0) => `D l/${_w0}&`)("D l"), $if_content__setup);
const $on = _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $global_brand = _fill_global("a0", $if_content__$global_brand, "brand");
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$on($scope, !$scope.c);
}));
