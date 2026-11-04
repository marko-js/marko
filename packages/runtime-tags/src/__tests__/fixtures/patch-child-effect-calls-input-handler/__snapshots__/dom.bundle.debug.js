// tags/label.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = ($_) => {};
const $input_onRead__script = _script_patch("__tests__/tags/label.marko_0_input_onRead#2 input_onRead", ($scope) => console.log("run", $scope.input_onRead()));
const $input_onRead = /*@__PURE__*/ _const("input_onRead", $input_onRead__script);
const $input$1 = ($scope, input) => $input_onRead($scope, input.onRead);
var label_default = /*@__PURE__*/ _template("__tests__/tags/label.marko", "", "", 0, $input$1);

// template.marko
const $template = "";
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("");
const $setup = ($_) => {};
const $input_title = /*@__PURE__*/ _const("input_title", ($scope) => $input_onRead($scope["#childScope/0"], $read($scope)));
const $input = ($scope, input) => $input_title($scope, input.title);
const $read = ($scope) => () => $scope.input_title;
_bind_resume("__tests__/template.marko_0/read input_title", $read);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
