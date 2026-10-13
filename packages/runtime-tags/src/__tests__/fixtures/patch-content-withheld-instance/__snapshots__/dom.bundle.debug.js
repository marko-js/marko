// tags/frag-host.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $frag_content__input_note = /*@__PURE__*/ _fill_join_closure("__tests__/tags/frag-host.marko_fill0", "input_note", _closure_get("input_note/5", ($scope) => _text($scope["#text/0"], $scope._._.input_note), ($scope) => $scope._._, "__tests__/tags/frag-host.marko_2_input_note#0:3/subscribe"), 0);
const $frag_content__setup = $frag_content__input_note;
const $frag_content = _content("__tests__/tags/frag-host.marko_2*content", "<em> </em>", "D ", $frag_content__setup);
const $for_content__input_mode__OR__i__OR__frag_content = /*@__PURE__*/ _or(5, ($scope) => _attr_content($scope, "#section/0", $scope.i || $scope._.input_mode ? $scope.frag_content : null), 2);
const $for_content__input_mode = /*@__PURE__*/ _for_closure("#text/0", $for_content__input_mode__OR__i__OR__frag_content);
const $for_content__frag = ($scope, frag) => $for_content__frag_content($scope, frag?.content);
const $for_content__setup = ($scope) => {
	$for_content__input_mode._($scope);
	$for_content__frag($scope, { content: $frag_content($scope) });
};
const $for_content__frag_content = /*@__PURE__*/ _const("frag_content", $for_content__input_mode__OR__i__OR__frag_content);
const $for_content__i = /*@__PURE__*/ _const("i", $for_content__input_mode__OR__i__OR__frag_content);
const $for_content__$params = ($scope, $params2) => $for_content__i($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<section></section>", " ", $for_content__setup, $for_content__$params);
function $setup$1($scope) {
	$for($scope, [[0, 1]]);
}
const $input$1 = ($scope, input) => {
	$input_mode($scope, input.mode);
	$input_note$1($scope, input.note);
};
const $input_note__closure = /*@__PURE__*/ _closure($frag_content__input_note);
const $input_note$1 = /*@__PURE__*/ _fill_const("__tests__/tags/frag-host.marko_fill0", "input_note", $input_note__closure);
const $input_mode = /*@__PURE__*/ _const("input_mode", $for_content__input_mode);
var frag_host_default = /*@__PURE__*/ _template("__tests__/tags/frag-host.marko", $template$1, "b%c", $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>toggle</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
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
