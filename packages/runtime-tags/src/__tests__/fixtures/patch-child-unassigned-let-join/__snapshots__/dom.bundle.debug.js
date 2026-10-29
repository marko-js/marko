// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
const $setup = ($_) => {};
const $input_a = ($scope, input_a) => $input_a$1($scope["#childScope/0"], input_a);
const $input_b = ($scope, input_b) => $input_b$1($scope["#childScope/0"], input_b);
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);

// tags/outer.marko
const $template = "<p> </p>";
const $walks = "D l";
const $setup = ($_) => {};
const $input_b__OR__x = /*@__PURE__*/ _fill("__tests__/tags/outer.marko_fill0", "input_b", /*@__PURE__*/ _or_resume("__tests__/tags/outer.marko_0_input_b#4_x#5/init", 6, ($scope) => _text($scope["#text/0"], $scope.x + $scope.input_b)));
const $x = _let("x/5", $input_b__OR__x);
const $input_a = $x;
const $input_b = /*@__PURE__*/ _const("input_b", $input_b__OR__x);
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template, "D l", 0, $input);
