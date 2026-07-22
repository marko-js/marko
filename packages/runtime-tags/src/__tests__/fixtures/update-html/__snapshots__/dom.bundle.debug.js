// template.marko
const $template = "<em>Testing</em> <!>";
const $walks = "c%b";
const $setup = () => {};
const $value = /*@__PURE__*/ _render(($scope, value) => _html($scope, value, "#text/0"));
const $input = ($scope, input) => $value($scope, input.value);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "c%b", $setup, $input);
