// tags/outer/tags/inner/index.marko
const $template$1 = "<em> </em>";
const $global_brand = /*@__PURE__*/ _global_join("brand", "c0", ($scope, $global_brand) => _text($scope.a, $scope.$.brand));
function $setup$1($scope) {
	$global_brand($scope, $scope.$.brand);
}

// tags/outer/index.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
function $setup($scope) {
	$setup$1($scope.a);
}

// template.marko
const $if_content__setup = ($scope) => {
	$setup($scope.a);
};
const $if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $if_content__setup);
const $show = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.c);
}));
