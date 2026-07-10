// template.marko
const $template = "<!--a --> b--><div> </div>";
const $walks = "bD l";
const $setup = () => {};
const $input_x = ($scope, input_x) => _text($scope["#text/0"], input_x);
const $input = ($scope, input) => $input_x($scope, input.x);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
