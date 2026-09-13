// tags/echo/index.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $input_cfg_label = ($scope, rest_label) => _text($scope["#text/0"], rest_label);
const $input$1 = ($scope, input) => $cfg2($scope, input.cfg);
const $input_cfg = ($scope, $cfg) => $input_cfg_label($scope, $cfg?.label);
const $cfg2 = $input_cfg;
var echo_default = /*@__PURE__*/ _template("__tests__/tags/echo/index.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)("D l");
const $setup = () => {};
const $input_label = ($scope, input_label) => $cfg2($scope["#childScope/0"], { label: input_label });
const $input = ($scope, input) => $input_label($scope, input.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
