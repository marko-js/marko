// tags/hidden-note.marko
const $template$1 = "<!><!><b> </b><!><!>";
const $walks$1 = "b%bD l%c";
const $input_text = ($scope, input_text) => _text($scope["#text/1"], input_text);
const $show = /*@__PURE__*/ _show("#text/2", "#text/0");
function $setup$1($scope) {
	$show($scope, false);
}
const $input$1 = ($scope, input) => $input_text($scope, input.text);
var hidden_note_default = /*@__PURE__*/ _template("__tests__/tags/hidden-note.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%c`)($walks$1);
const $if_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:4/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => {
	_text($scope["#text/0"], $scope._.input_label);
	_text($scope["#text/2"], $scope._.input_label);
	_text($scope["#text/6"], $scope._.input_label);
	$input_text($scope["#childScope/9"], $scope._.input_label);
})));
const $if_content__show = /*@__PURE__*/ _show("#text/4", "#text/1", "#text/3");
const $if_content__show2 = /*@__PURE__*/ _show("#div/5");
const $if_content__show3 = /*@__PURE__*/ _show("#text/8", "#text/7");
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$setup$1($scope["#childScope/9"]);
	$if_content__show($scope, false);
	$if_content__show2($scope, false);
	$if_content__show3($scope, false);
};
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
}
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", ($scope) => {
	$if_content__input_label($scope);
	$input_text($scope["#childScope/0"], $scope.input_label);
}, $if_content__input_label);
const $if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `<p> </p><!><b> </b> <i>range</i><!><!><div><em> </em></div><!><s>single</s><!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `D l%bD lc%b%b E m%c%b/${_w0}&b`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
