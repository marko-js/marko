// template.marko
const $template = "<div><h1> </h1><p> </p></div>";
const $walks = "D D lD m";
const $global_locale = /*@__PURE__*/ _global_join("locale", "__tests__/template.marko_0_$global_locale#6/global", ($scope, $global_locale) => _attr($scope["#h1/0"], "title", $scope.$global.locale));
const $global_brand = /*@__PURE__*/ _global_join("brand", "__tests__/template.marko_0_$global_brand#7/global", ($scope, $global_brand) => _text($scope["#text/1"], $scope.$global.brand));
const $input_name = ($scope, input_name) => _text($scope["#text/2"], input_name);
const $input = ($scope, input) => $input_name($scope, input.name);
function $setup($scope) {
	$global_locale($scope, $scope.$global.locale);
	$global_brand($scope, $scope.$global.brand);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
