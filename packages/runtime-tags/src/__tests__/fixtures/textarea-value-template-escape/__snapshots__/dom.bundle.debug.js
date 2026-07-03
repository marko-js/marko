// template.marko
const $template = "<textarea></textarea>";
const $walks = " b";
const $setup = () => {};
const $input_name = /* @__PURE__ */ _const("input_name", ($scope) => _attr_input_value_default($scope, "#textarea/0", `[AB]${$scope.input_name}[!]`));
const $input = ($scope, input) => $input_name($scope, input.name);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, " b", $setup, $input);
