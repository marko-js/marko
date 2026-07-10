// template.marko
const $template = "<div> </div>";
const $walks = "D l";
const $setup = () => {};
const $x = /*@__PURE__*/ _let("x/5", ($scope) => _text($scope["#text/0"], $scope.x));
const $input_b = ($scope, input_b) => $x($scope, $scope.input_a);
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", $setup, $input);
