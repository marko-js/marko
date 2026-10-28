// template.marko
const $template = "<p> </p>";
const $walks = "D l";
const $setup = ($_) => {};
const $input_b__OR__y = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_b", /*@__PURE__*/ _or(7, ($scope) => _text($scope["#text/0"], $scope.y + $scope.input_b)));
const $y = /*@__PURE__*/ _const("y", $input_b__OR__y);
const $x = _let("x/5", ($scope) => $y($scope, $scope.x + "!"));
const $input_a = $x;
const $input_b = /*@__PURE__*/ _const("input_b", $input_b__OR__y);
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", 0, $input);
