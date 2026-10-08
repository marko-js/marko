// tags/logger.marko
const $template = "<div></div>";
const $global_brand__script = _fill_global_script("b1", ($scope) => document.querySelector("div").dataset.log = "ran:" + $scope.$.brand);
_fill_global_join("brand", "b0", $global_brand__script);
const $global_brand = /*@__PURE__*/ _fill_global_join("brand", "b0", $global_brand__script);
function $setup($scope) {
	$global_brand($scope);
}

// template.marko
const $if_content__setup = ($scope) => {
	$setup($scope.a);
};
const $if = /*@__PURE__*/ _if(1, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("b"), $if_content__setup);
const $show = /*@__PURE__*/ _fill_let("a1", 2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.c);
}));
