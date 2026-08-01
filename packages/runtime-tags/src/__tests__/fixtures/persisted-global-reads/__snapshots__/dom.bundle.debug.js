// template.marko
const $template = "<div><h1> </h1><p> </p></div>";
const $walks = "D D lD m";
function $setup($scope) {
	_attr($scope["#h1/0"], "title", $scope.$global.locale);
	_text($scope["#text/1"], $scope.$global.brand);
}
const $input_name = ($scope, input_name) => _text($scope["#text/2"], input_name);
const $input = ($scope, input) => $input_name($scope, input.name);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
