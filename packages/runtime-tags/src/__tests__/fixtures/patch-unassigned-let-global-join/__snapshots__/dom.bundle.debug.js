// template.marko
const $template = "<p> </p>";
const $walks = "D l";
const $x__OR__$global_flag = /*@__PURE__*/ _or_patch("__tests__/template.marko_0_x#4_$global_flag#6/setup", 5, ($scope) => _text($scope["#text/0"], $scope.x + _global_read($scope.$global, "flag")));
const $x = _let("x/4", $x__OR__$global_flag);
const $input_a = $x;
const $global_flag = _fill_global_resume("__tests__/template.marko_0_$global_flag#6/subscribe", $x__OR__$global_flag, "flag");
const $setup = $global_flag;
const $input = ($scope, input) => $input_a($scope, input.a);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", $setup, $input);
