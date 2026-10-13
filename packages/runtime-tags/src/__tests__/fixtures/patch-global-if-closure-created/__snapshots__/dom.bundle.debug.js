// tags/badge.marko
const $template$1 = "<button class=b>o</button><!><!>";
const $walks$1 = " b%c";
const $if_content__$global_brand = /*@__PURE__*/ _fill_global_join("brand", "__tests__/tags/badge.marko_1_$global_brand#2/global", ($scope) => {
	_text($scope["#text/0"], $scope.$global.brand);
});
const $if_content__setup$1 = ($scope) => $if_content__$global_brand($scope);
const $if$1 = /*@__PURE__*/ _if("#text/1", "<p> </p>", "D ", $if_content__setup$1);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/badge.marko_fill0", "open/2", ($scope) => $if$1($scope, $scope.open ? 0 : 1));
const $setup__script$1 = _script("__tests__/tags/badge.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$setup__script$1($scope);
	$open($scope, false);
}
var badge_default = /*@__PURE__*/ _template("__tests__/tags/badge.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $template = "<button class=a>s</button><!><!>";
const $walks = " b%c";
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1), $if_content__setup);
const $show = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "show/2", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$setup__script($scope);
	$show($scope, false);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
