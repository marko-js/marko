// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__setup = ($scope) => $input_label($scope["#childScope/0"], "x");
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("b"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/probe.marko
const $template = "<p>probe</p>";
const $walks = "b";
const $setup = ($_) => {};
const $input_label__script = _script("__tests__/tags/probe.marko_0_input_label#2", ($scope) => console.log("probe", $scope.input_label));
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__script);
const $input = ($scope, input) => $input_label($scope, input.label);
var probe_default = /*@__PURE__*/ _template("__tests__/tags/probe.marko", $template, "b", 0, $input);
