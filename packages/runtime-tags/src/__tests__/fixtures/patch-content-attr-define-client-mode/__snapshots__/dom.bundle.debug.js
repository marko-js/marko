// tags/frag-host.marko
const $template$1 = "<section></section>";
const $walks$1 = " b";
const $frag_content__input_note = /*@__PURE__*/ _fill_join_closure("__tests__/tags/frag-host.marko_fill0", "input_note", /*@__PURE__*/ _closure_get("input_note/8", ($scope) => _text($scope["#text/0"], $scope._.input_note), 0, "__tests__/tags/frag-host.marko_1_input_note#0:3/subscribe"), 0);
const $frag_content__setup = $frag_content__input_note;
const $frag_content = _content("__tests__/tags/frag-host.marko_1*content", "<em> </em>", "D ", $frag_content__setup);
const $frag = ($scope, frag) => $frag_content2($scope, frag?.content);
const $input_mode__OR__frag_content = /*@__PURE__*/ _shell_or("__tests__/tags/frag-host.marko_0_input_mode#4_frag_content#6/init", 7, ($scope) => _attr_content($scope, "#section/0", $scope.input_mode ? $scope.frag_content : null));
const $frag_content2 = /*@__PURE__*/ _const("frag_content", $input_mode__OR__frag_content);
function $setup$1($scope) {
	$frag($scope, { content: $frag_content($scope) });
}
const $input_mode = /*@__PURE__*/ _const("input_mode", $input_mode__OR__frag_content);
const $input$1 = ($scope, input) => {
	$input_mode($scope, input.mode);
	$input_note$1($scope, input.note);
};
const $input_note__closure = /*@__PURE__*/ _closure($frag_content__input_note);
const $input_note$1 = /*@__PURE__*/ _fill_const("__tests__/tags/frag-host.marko_fill0", "input_note", $input_note__closure);
var frag_host_default = /*@__PURE__*/ _template("__tests__/tags/frag-host.marko", $template$1, " b", $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>toggle</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)(" b");
const $mode = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "mode/5", ($scope) => $input_mode($scope["#childScope/1"], $scope.mode));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$mode($scope, !$scope.mode);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
	$setup__script($scope);
	$mode($scope, false);
}
const $input_note = ($scope, input_note) => $input_note$1($scope["#childScope/1"], input_note);
const $input = ($scope, input) => $input_note($scope, input.note);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
