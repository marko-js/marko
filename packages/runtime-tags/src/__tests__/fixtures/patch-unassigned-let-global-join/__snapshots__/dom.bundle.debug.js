// template.marko
const $template = "<p> </p>";
const $walks = "D l";
const $setup = ($_) => {};
const $x__OR__$global_flag = /*@__PURE__*/ _fill_global("__tests__/template.marko_0_x#4_$global_flag#6/subscribe", ($scope) => _text($scope["#text/0"], $scope.x + _global_read($scope.$global, "flag")), "flag");
const $x = _let("x/4", $x__OR__$global_flag);
const $input_a = $x;
const $input = ($scope, input) => $input_a($scope, input.a);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", 0, $input);
