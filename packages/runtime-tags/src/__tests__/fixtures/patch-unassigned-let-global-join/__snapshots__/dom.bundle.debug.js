// template.marko
const $template = "<p> </p>";
const $walks = "D l";
const $setup = ($_) => {};
const $global_flag_key = /*@__PURE__*/ _global_key("flag");
const $global_flag = /*@__PURE__*/ _global_closure($global_flag_key, "__tests__/template.marko_0_$global_flag#6/subscribe");
const $x__OR__$global_flag = /*@__PURE__*/ _global_or(($scope) => _text($scope["#text/0"], $scope.x + _global_read($scope.$global, "flag")), $global_flag);
const $x = _let("x/4", $x__OR__$global_flag);
const $input_a = $x;
const $input = ($scope, input) => $input_a($scope, input.a);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", 0, $input);
