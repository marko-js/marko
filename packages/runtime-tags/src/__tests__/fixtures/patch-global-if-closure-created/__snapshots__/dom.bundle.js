// tags/badge.marko
const $template = "<button class=b>o</button><!><!>";
const $walks = " b%c";
const $if_content__$global_brand = /*@__PURE__*/ _fill_global_join("brand", "b0", ($scope) => {
	_text($scope.a, $scope.$.brand);
});
const $if_content__setup$1 = ($scope) => $if_content__$global_brand($scope);
const $if$1 = /*@__PURE__*/ _if(1, "<p> </p>", "D ", $if_content__setup$1);
const $open = /*@__PURE__*/ _fill_let("b2", 2, ($scope) => $if$1($scope, $scope.c ? 0 : 1));
const $setup__script$1 = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.c);
}));
function $setup($scope) {
	$setup__script$1($scope);
	$open($scope, false);
}

// template.marko
const $if_content__setup = ($scope) => {
	$setup($scope.a);
};
const $if = /*@__PURE__*/ _if(1, /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks), $if_content__setup);
const $show = /*@__PURE__*/ _fill_let("a1", 2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.c);
}));
