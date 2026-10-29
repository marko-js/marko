// template.marko
const $template = "<div><h1> </h1><p> </p></div>";
const $walks = "D D lD m";
const $setup__$global_locale = /*@__PURE__*/ _fill_global("__tests__/template.marko_0_$global_locale#5", ($scope) => _attr($scope["#h1/0"], "title", $scope.$global.locale), "locale");
const $setup__$global_brand = /*@__PURE__*/ _fill_global("__tests__/template.marko_0_$global_brand#7", ($scope) => _text($scope["#text/1"], $scope.$global.brand), "brand");
function $setup($scope) {
	$setup__$global_locale($scope);
	$setup__$global_brand($scope);
}
const $input_name = ($scope, input_name) => _text($scope["#text/2"], input_name);
const $input = ($scope, input) => $input_name($scope, input.name);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
