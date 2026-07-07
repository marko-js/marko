// template.marko
const $template = "<button>Click me</button>";
const $walks = " b";
const $setup = () => {};
const $input_onClick__script = _script("__tests__/template.marko_0_input_onClick", ($scope) => _on($scope["#button/0"], "click", $scope.input_onClick));
const $input_onClick = /*@__PURE__*/ _const("input_onClick", $input_onClick__script);
const $input = ($scope, input) => $input_onClick($scope, input.onClick);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
