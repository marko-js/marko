// tags/brand.marko
const $template = "<b> </b>";
const $setup__$global_brand = /*@__PURE__*/ _fill_global("b0", ($scope) => _text($scope.a, $scope.$.brand), "brand");
const $setup = $setup__$global_brand;

// template.marko
const $if_content__setup__$global_brand = /*@__PURE__*/ _fill_global("a0", ($scope) => _text($scope.a, $scope.$.brand), "brand");
const $if_content__setup = ($scope) => {
	$setup($scope.b);
	$if_content__setup__$global_brand($scope);
};
const $if = /*@__PURE__*/ _if(1, /*@__PURE__*/ ((_w0) => `<em> </em>${_w0}`)($template), /*@__PURE__*/ ((_w0) => `D l/${_w0}&`)("D l"), $if_content__setup);
const $on = _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$on($scope, !$scope.c);
}));
