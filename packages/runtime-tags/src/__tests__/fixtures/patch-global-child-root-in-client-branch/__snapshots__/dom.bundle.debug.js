// tags/badge.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $setup__$global_brand = /*@__PURE__*/ _fill_global_join("__tests__/tags/badge.marko_0_$global_brand#4", ($scope) => _text($scope["#text/0"], $scope.$global.brand), "brand");
const $setup$1 = $setup__$global_brand;
var badge_default = /*@__PURE__*/ _template("__tests__/tags/badge.marko", $template$1, "D l", $setup$1);

// template.marko
const $template = "<button>t</button><!><!>";
const $walks = " b%c";
const $if_content__setup = ($scope) => $setup$1($scope["#childScope/0"]);
const $if = /*@__PURE__*/ _if("#text/1", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $if_content__setup);
const $open = _let("open/2", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
