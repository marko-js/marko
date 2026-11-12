// tags/badge.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $global_brand_key = /*@__PURE__*/ _global_key("$global_brand/2", "brand");
const $global_brand = /*@__PURE__*/ _global_closure("__tests__/tags/badge.marko_0_$global_brand#4/subscribe", $global_brand_key, ($scope) => _text($scope["#text/0"], $scope.$global.brand));
const $setup$1 = $global_brand;
var badge_default = /*@__PURE__*/ _template("__tests__/tags/badge.marko", $template$1, "D l", $setup$1);

// template.marko
const $template = "<button>t</button><!><!>";
const $walks = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_plain = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_input_plain#0:4/setup", "#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_plain ? "span" : badge_default));
const $if_content__setup = $if_content__input_plain;
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $open = _let("open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_plain($scope, input.plain);
const $input_plain = /*@__PURE__*/ _const("input_plain", $if_content__input_plain);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
