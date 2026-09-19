// tags/host/index.marko
const $template$1 = "<section></section>";
const $walks$1 = " b";
const $setup$1 = () => {};
let $load_Child_setup = _resume("__tests__/tags/host/index.marko_1_#text#0/init", /*@__PURE__*/ _load_ready("ready:__tests__/tags/host/child.marko", "#childScope/1", /*@__PURE__*/ _load_setup("#text/0", "#childScope/1", () => import("./v:child.marko.setup.mjs"))));
let $load_Child_tag_input_label = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_label.mjs"));
const $if_content__input_label = /*@__PURE__*/ _fill_join("__tests__/tags/host/index.marko0", "input_label", /*@__PURE__*/ _if_closure("#section/0", 0, ($scope) => $load_Child_tag_input_label($scope["#childScope/1"], $scope._.input_label)));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$load_Child_setup($scope);
};
const $if = /*@__PURE__*/ _if("#section/0", "<!><!><!>", "b%/&", $if_content__setup);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_show$1($scope, input.show);
	$input_label$1($scope, input.label);
};
const $input_label$1 = /*@__PURE__*/ _fill_const("__tests__/tags/host/index.marko0", "input_label", $if_content__input_label);
var host_default = /*@__PURE__*/ _template("__tests__/tags/host/index.marko", $template$1, " b", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)(" b");
const $setup = () => {};
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/0"], input_show);
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/0"], input_label);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);

// tags/host/child.marko
const $template = "<p class=child> </p>";
const $walks = "D l";
const $setup = () => {};
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var child_default = /*@__PURE__*/ _template("__tests__/tags/host/child.marko", $template, "D l", 0, $input);

// tags/host/v:child.marko.setup.js
const _ = [
	$template,
	"D l",
	$setup
];
