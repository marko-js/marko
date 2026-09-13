// components/child.marko
const $template = "<button><!>:<!></button>";
const $walks = " D%c%l";
const $count = /*@__PURE__*/ _fill_let("__tests__/components/child.marko0", "count/6", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script("__tests__/components/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
}
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var child_default = /*@__PURE__*/ _template("__tests__/components/child.marko", $template, $walks, $setup, $input);

// components/wrapper.marko
const $template$1 = "<section></section>";
const $walks$1 = " b";
const $setup$1 = () => {};
let $load_Child_setup = _resume("__tests__/components/wrapper.marko_1_#text#0/init", /*@__PURE__*/ _load_ready("ready:__tests__/components/child.marko", "#childScope/1", /*@__PURE__*/ _load_setup("#text/0", "#childScope/1", () => import("./v:child.marko.setup.mjs"))));
let $load_Child_tag_input_label = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_label.mjs"));
const $if_content__input_label$1 = /*@__PURE__*/ _fill_join("__tests__/components/wrapper.marko0", "input_label", /*@__PURE__*/ _if_closure("#section/0", 0, ($scope) => $load_Child_tag_input_label($scope["#childScope/1"], $scope._.input_label)));
const $if_content__setup$1 = ($scope) => {
	$if_content__input_label$1._($scope);
	$load_Child_setup($scope);
};
const $if$1 = /*@__PURE__*/ _if("#section/0", "<!><!><!>", "b%/&", $if_content__setup$1);
const $input_show$1 = ($scope, input_show) => $if$1($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_show$1($scope, input.show);
	$input_label$1($scope, input.label);
};
const $input_label$1 = /*@__PURE__*/ _fill_const("__tests__/components/wrapper.marko0", "input_label", $if_content__input_label$1);
var wrapper_default = /*@__PURE__*/ _template("__tests__/components/wrapper.marko", $template$1, " b", 0, $input$1);

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $if_content__input_show = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_show", /*@__PURE__*/ _if_closure("#main/0", 0, ($scope) => $input_show$1($scope["#childScope/0"], $scope._.input_show)));
const $if_content__setup = ($scope) => {
	$if_content__input_show._($scope);
	$if_content__input_label._($scope);
};
const $if_content__input_label = /*@__PURE__*/ _fill_join("__tests__/template.marko1", "input_label", /*@__PURE__*/ _if_closure("#main/0", 0, ($scope) => $input_label$1($scope["#childScope/0"], $scope._.input_label)));
const $if = /*@__PURE__*/ _if("#main/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)(" b"), $if_content__setup);
const $mounted = /*@__PURE__*/ _let("mounted/5", ($scope) => $if($scope, $scope.mounted ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => $mounted($scope, true));
function $setup($scope) {
	$mounted($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_show = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_show", $if_content__input_show);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko1", "input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);

// components/v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
