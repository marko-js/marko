// template.marko
const $template = "<!---->";
const $walks = " b";
const $setup = () => {};
const $input_text = /*@__PURE__*/ _const("input_text", ($scope) => _text($scope["#comment/0"], `${_to_text($scope.input_text)}`));
const $input = ($scope, input) => $input_text($scope, input.text);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
