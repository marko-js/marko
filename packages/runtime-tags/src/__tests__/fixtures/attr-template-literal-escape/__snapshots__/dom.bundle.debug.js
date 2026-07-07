// template.marko
const $template = "<div></div>";
const $walks = " b";
const $setup = () => {};
const $input_name = ($scope, input_name) => _attr($scope["#div/0"], "foo", `Hello ${input_name}`);
const $input = ($scope, input) => $input_name($scope, input.name);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
