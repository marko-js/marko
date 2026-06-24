// template.marko
const $template = "Static <!>";
const $walks = "b%b";
const $setup = () => {};
const $value = ($scope, value) => _text($scope["#text/0"], value);
const $input = ($scope, input) => $value($scope, input.value);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%b", $setup, $input);
