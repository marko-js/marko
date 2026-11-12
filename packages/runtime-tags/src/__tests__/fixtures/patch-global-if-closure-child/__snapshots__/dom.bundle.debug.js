// tags/brand.marko
const $template$1 = "<b> </b>";
const $walks$1 = "D l";
const $global_brand_key$1 = /*@__PURE__*/ _global_key("brand");
const $global_brand = /*@__PURE__*/ _global_closure($global_brand_key$1, "__tests__/tags/brand.marko_0_$global_brand#4/subscribe", ($scope) => _text($scope["#text/0"], $scope.$global.brand));
const $setup$1 = $global_brand;
var brand_default = /*@__PURE__*/ _template("__tests__/tags/brand.marko", $template$1, "D l", $setup$1);

// template.marko
const $template = "<button>t</button><!><!>";
const $walks = " b%c";
const $global_brand_key = /*@__PURE__*/ _global_key("brand");
const $if_content__$global_brand = /*@__PURE__*/ _global_if($global_brand_key, "#text/1", 0, "__tests__/template.marko_1_$global_brand#0:7/subscribe", ($scope) => _text($scope["#text/0"], $scope.$global.brand));
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/1"]);
	$if_content__$global_brand($scope);
};
const $if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `<em> </em>${_w0}`)($template$1), /*@__PURE__*/ ((_w0) => `D l/${_w0}&`)("D l"), $if_content__setup);
const $on = _let("on/2", ($scope) => $if($scope, $scope.on ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$on($scope, !$scope.on);
}));
function $setup($scope) {
	$on($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
