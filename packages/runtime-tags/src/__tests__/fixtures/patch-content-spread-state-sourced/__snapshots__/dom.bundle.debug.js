// tags/box.marko
const $template$1 = "<div></div><button>+</button>";
const $walks$1 = " b b";
const $input__OR__count__script = _script("__tests__/tags/box.marko_0_input#3_count#4", ($scope) => _attrs_script($scope, "#div/0"));
const $input__OR__count = /*@__PURE__*/ _fill_join("__tests__/tags/box.marko_fill0", "input", /*@__PURE__*/ _or(5, ($scope) => {
	_attrs_content($scope, "#div/0", {
		...$scope.input,
		"data-count": $scope.count
	});
	$input__OR__count__script($scope);
}));
const $count = /*@__PURE__*/ _fill_let("__tests__/tags/box.marko_fill1", "count/4", $input__OR__count);
const $setup__script = _script("__tests__/tags/box.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup$1($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input$1 = /*@__PURE__*/ _const("input", $input__OR__count);
var box_default = /*@__PURE__*/ _template("__tests__/tags/box.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $box_content__input_note = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_note", /*@__PURE__*/ _closure_get("input_note/5", ($scope) => _text($scope["#text/0"], $scope._.input_note), 0, "__tests__/template.marko_1_input_note#0:4/subscribe"), 0);
const $box_content__setup = $box_content__input_note;
const $box_content = _content("__tests__/template.marko_1*content", "<em> </em>", "D ", $box_content__setup);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
}
const $input_kind = ($scope, input_kind) => $input$1($scope["#childScope/0"], {
	class: input_kind,
	content: $box_content($scope)
});
const $input = ($scope, input) => {
	$input_kind($scope, input.kind);
	$input_note($scope, input.note);
};
const $input_note__closure = /*@__PURE__*/ _closure($box_content__input_note);
const $input_note = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
