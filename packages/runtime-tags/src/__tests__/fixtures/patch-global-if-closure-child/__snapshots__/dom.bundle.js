// tags/brand.marko
const $template = "<b> </b>";
const $global_brand = /*@__PURE__*/ _global_join("brand", "b0", ($scope, $global_brand) => _text($scope.a, $scope.$.brand));
function $setup($scope) {
	$global_brand($scope, $scope.$.brand);
}

// template.marko
const $if_content__$global_brand = /*@__PURE__*/ _global_join("brand", "a0", /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.a, $scope.$.brand)));
const $if_content__setup = ($scope) => {
	$if_content__$global_brand._($scope);
	$setup($scope.b);
};
const $if = /*@__PURE__*/ _if(1, /*@__PURE__*/ ((_w0) => `<em> </em>${_w0}`)($template), /*@__PURE__*/ ((_w0) => `D l/${_w0}&`)("D l"), $if_content__setup);
const $on = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$on($scope, !$scope.c);
}));
