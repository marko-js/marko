// template.marko
const $template = "<p> </p><p> </p>";
const $walks = "D lD l";
const $setup = ($_) => {};
const $x = /*@__PURE__*/ _let("x/6", ($scope) => _text($scope["#text/0"], $scope.x));
const $input_v = $x;
const $input_w = ($scope, input_w) => _text($scope["#text/1"], input_w);
const $input = ($scope, input) => {
	$input_v($scope, input.v);
	$input_w($scope, input.w);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
