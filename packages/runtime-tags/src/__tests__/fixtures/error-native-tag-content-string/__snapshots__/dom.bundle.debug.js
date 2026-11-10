// template.marko
const $template = "<div></div>";
const $walks = " b";
const $setup = ($_) => {};
const $input_text = ($scope, input_text) => _attr_content($scope, "#div/0", input_text);
const $input = ($scope, input) => $input_text($scope, input.text);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
