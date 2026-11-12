// template.marko
const $template = "<p> </p>";
const $walks = "D l";
const $global_flag_key = /*@__PURE__*/ _global_key("$global_flag/7", "flag");
const $global_flag = /*@__PURE__*/ _global_closure("__tests__/template.marko_0_$global_flag#6/subscribe", $global_flag_key);
const $x__OR__$global_flag = /*@__PURE__*/ _global_or(5, ($scope) => _text($scope["#text/0"], $scope.x + _global_read($scope.$global, "flag")), $global_flag);
const $x = _let("x/4", $x__OR__$global_flag);
const $input_a = $x;
const $setup = $global_flag;
const $input = ($scope, input) => $input_a($scope, input.a);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", $setup, $input);
