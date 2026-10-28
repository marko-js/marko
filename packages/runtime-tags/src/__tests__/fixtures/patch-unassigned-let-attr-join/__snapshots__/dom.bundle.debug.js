// template.marko
const $template = "<div>t</div>";
const $walks = " b";
const $setup = ($_) => {};
const $input_w__OR__x = /*@__PURE__*/ _or(6, ($scope) => _attr_class($scope["#div/0"], $scope.x + $scope.input_w));
const $x = _fill_resume("__tests__/template.marko_fill1", /*@__PURE__*/ _let("x/5", $input_w__OR__x));
const $input_v = $x;
const $input_w = _fill_resume("__tests__/template.marko_fill0", /*@__PURE__*/ _const("input_w", $input_w__OR__x));
const $input = ($scope, input) => {
	$input_v($scope, input.v);
	$input_w($scope, input.w);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
