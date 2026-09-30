// template.marko
const $template = "<ul></ul>";
const $walks = " b";
const $setup = () => {};
let n = 0;
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li><!>:<!></li>", "D%c%");
const $input_items = ($scope, input_items) => $for($scope, [input_items, "id"]);
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
