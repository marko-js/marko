// template.marko
const $template = "<button>t</button><!><!>";
const $walks = " b%c";
const $if_content__$global_brand = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_$global_brand#0:7/setup", "#text/1", 0, ($scope) => _text($scope["#text/0"], $scope.$global.brand));
const $if_content__setup = $if_content__$global_brand;
const $if = /*@__PURE__*/ _if("#text/1", "<em> </em>", "D ", $if_content__setup);
const $on = _let("on/2", ($scope) => $if($scope, $scope.on ? 0 : 1));
const $global_brand = _fill_global_resume("__tests__/template.marko_0_$global_brand#7/subscribe", $if_content__$global_brand, "brand");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$on($scope, !$scope.on);
}));
function $setup($scope) {
	$on($scope, true);
	$global_brand($scope);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
