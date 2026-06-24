// template.marko
const $template = "<div a=0></div>";
const $walks = " b";
const $setup = () => {};
const $input_value = ($scope, input_value) => _attr($scope["#div/0"], "b", input_value);
const $input = ($scope, input) => $input_value($scope, input.value);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
