// template.marko
const $template = "<div><h1> </h1><p> </p></div>";
const $walks = "D D lD m";
const $global_locale_key = /*@__PURE__*/ _global_key("$global_locale/7", "locale");
const $global_locale = /*@__PURE__*/ _global_closure("__tests__/template.marko_0_$global_locale#5/subscribe", $global_locale_key, ($scope) => _attr($scope["#h1/0"], "title", $scope.$global.locale));
const $global_brand_key = /*@__PURE__*/ _global_key("$global_brand/8", "brand");
const $global_brand = /*@__PURE__*/ _global_closure("__tests__/template.marko_0_$global_brand#7/subscribe", $global_brand_key, ($scope) => _text($scope["#text/1"], $scope.$global.brand));
function $setup($scope) {
	$global_locale($scope);
	$global_brand($scope);
}
const $input_name = ($scope, input_name) => _text($scope["#text/2"], input_name);
const $input = ($scope, input) => $input_name($scope, input.name);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
