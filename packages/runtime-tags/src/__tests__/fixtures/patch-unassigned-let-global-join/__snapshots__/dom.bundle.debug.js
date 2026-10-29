// template.marko
const $template = "<p> </p>";
const $walks = "D l";
const $input_w__OR__x = /*@__PURE__*/ _or(5, ($scope) => _text($scope["#text/0"], $scope.x + $scope.input_w));
const $x = /*@__PURE__*/ _let("x/4", $input_w__OR__x);
const $setup__$global_v = /*@__PURE__*/ _fill_global_join("__tests__/template.marko_0_$global_v#5", ($scope) => $x($scope, $scope.$global.v), "v");
const $setup = $setup__$global_v;
const $input_w = _fill_resume("__tests__/template.marko_fill0", /*@__PURE__*/ _const("input_w", $input_w__OR__x));
const $input = ($scope, input) => $input_w($scope, input.w);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", $setup, $input);
