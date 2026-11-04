// template.marko
const $template = "<p> </p>";
const $walks = "D l";
const $setup = ($_) => {};
const $input_w__OR__x = /*@__PURE__*/ _or_patch("__tests__/template.marko_0_input_w#4_x#5/setup", 7, ($scope) => _text($scope["#text/0"], $scope.x + $scope.input_w));
const $x = _fill_let_change_resume("__tests__/template.marko_fill0", "x/5", $input_w__OR__x);
const $input_v = ($scope, input_v) => $x($scope, input_v, $valueChange);
const $input_w = /*@__PURE__*/ _const("input_w", $input_w__OR__x);
const $input = ($scope, input) => {
	$input_v($scope, input.v);
	$input_w($scope, input.w);
};
function $valueChange(v) {
	console.log(v);
}
_resumed["__tests__/template.marko_0/valueChange"] = $valueChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", 0, $input);
