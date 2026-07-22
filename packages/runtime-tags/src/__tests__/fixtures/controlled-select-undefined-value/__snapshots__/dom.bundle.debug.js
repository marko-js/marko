// template.marko
const $template = "<select><option value=a>A</option><option value=b>B</option><option value>None</option></select>";
const $walks = " b";
const $setup = () => {};
const $input_sel = /*@__PURE__*/ _const("input_sel", ($scope) => _attr_select_value_default($scope, "#select/0", $scope.input_sel));
const $input = ($scope, input) => $input_sel($scope, input.sel);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
