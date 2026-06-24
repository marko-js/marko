// template.marko
const $template = "<!---->";
const $walks = " b";
const $setup = () => {};
const $input_value = /*@__PURE__*/ _const("input_value", ($scope) => _text($scope["#comment/0"], `${_to_text($scope.input_value)}`));
const $input = ($scope, input) => $input_value($scope, input.value);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
