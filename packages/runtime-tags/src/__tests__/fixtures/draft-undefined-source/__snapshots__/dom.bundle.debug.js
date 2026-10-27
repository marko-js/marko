// template.marko
const $template = "<div> </div>";
const $walks = "D l";
const $setup = ($_) => {};
const $d = /*@__PURE__*/ _draft("d/4", ($scope) => _text($scope["#text/0"], $scope.d === undefined ? "none" : $scope.d));
const $input_x = $d;
const $input = ($scope, input) => $input_x($scope, input.x);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", 0, $input);
