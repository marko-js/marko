// template.marko
const $template = "<div>Hello</div>";
const $walks = " b";
const $setup = () => {};
const $input_handler = ($scope, input_handler) => _attr($scope["#div/0"], "title", input_handler);
const $input = ($scope, input) => $input_handler($scope, input.handler);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
