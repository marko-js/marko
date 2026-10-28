// tags/widget/index.marko
const $template = "<em> </em>";
const $setup__$global_brand = /*@__PURE__*/ _fill_global_join("b0", ($scope) => _text($scope.a, $scope.$.brand), "brand");
const $setup = $setup__$global_brand;

// template.marko
const $if_content__setup = ($scope) => $setup($scope.a);
const $if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $if_content__setup);
const $show = _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.c);
}));
