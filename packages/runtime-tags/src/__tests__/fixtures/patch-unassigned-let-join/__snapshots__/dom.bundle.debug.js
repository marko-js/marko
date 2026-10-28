// template.marko
const $template = "<p> </p><p> </p>";
const $walks = "D lD l";
const $setup = ($_) => {};
const $input_w__OR__x = /*@__PURE__*/ _or(7, ($scope) => _text($scope["#text/1"], $scope.x + $scope.input_w));
const $x = _let("x/6", ($scope) => {
	_text($scope["#text/0"], $scope.x);
	$input_w__OR__x($scope);
});
const $input_v = $x;
const $input_w = _fill_resume("__tests__/template.marko_fill0", /*@__PURE__*/ _const("input_w", $input_w__OR__x));
const $input = ($scope, input) => {
	$input_v($scope, input.v);
	$input_w($scope, input.w);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
