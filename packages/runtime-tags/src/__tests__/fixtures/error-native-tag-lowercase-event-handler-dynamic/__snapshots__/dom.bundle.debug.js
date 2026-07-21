// template.marko
const $template = "<button>Click me</button>";
const $walks = " b";
const $setup = () => {};
const $input_handler = /*@__PURE__*/ _render(($scope, input_handler) => _attr($scope["#button/0"], "onclick", input_handler));
const $input = ($scope, input) => $input_handler($scope, input.handler);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
