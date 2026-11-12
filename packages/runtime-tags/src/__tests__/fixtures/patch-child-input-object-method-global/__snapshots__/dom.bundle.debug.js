// tags/code-block.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $else_content__input_text__OR__highlight = /*@__PURE__*/ _or_patch("__tests__/tags/code-block.marko_2_input_text#0:4_highlight#0:6/setup", 1, ($scope) => _html($scope, $scope._.highlight($scope._.input_text), "#text/0"));
const $else_content__input_text = /*@__PURE__*/ _if_closure_patch("__tests__/tags/code-block.marko_2_input_text#0:4/setup", "#text/0", 1, $else_content__input_text__OR__highlight);
const $else_content__setup = ($scope) => {
	$else_content__input_text._($scope);
	$else_content__highlight._($scope);
};
const $else_content__highlight = /*@__PURE__*/ _if_closure_patch("__tests__/tags/code-block.marko_2_highlight#0:6/setup", "#text/0", 1, $else_content__input_text__OR__highlight);
const $if_content__input_text__OR__highlight = /*@__PURE__*/ _or_patch("__tests__/tags/code-block.marko_1_input_text#0:4_highlight#0:6/setup", 1, ($scope) => _html($scope, $scope._.highlight($scope._.input_text), "#text/0"));
const $if_content__input_text = /*@__PURE__*/ _if_closure_patch("__tests__/tags/code-block.marko_1_input_text#0:4/setup", "#text/0", 0, $if_content__input_text__OR__highlight);
const $if_content__setup = ($scope) => {
	$if_content__input_text._($scope);
	$if_content__highlight._($scope);
};
const $if_content__highlight = /*@__PURE__*/ _if_closure_patch("__tests__/tags/code-block.marko_1_highlight#0:6/setup", "#text/0", 0, $if_content__input_text__OR__highlight);
const $highlight2 = /*@__PURE__*/ _const("highlight", ($scope) => {
	$if_content__highlight($scope);
	$else_content__highlight($scope);
});
const $global_theme_key = /*@__PURE__*/ _global_key("$global_theme/11", "theme");
const $global_theme = /*@__PURE__*/ _global_closure("__tests__/tags/code-block.marko_0_$global_theme#8/subscribe", $global_theme_key);
const $input_cursor__OR__$global_theme = /*@__PURE__*/ _global_or(7, ($scope) => $highlight2($scope, $highlight($scope)), $global_theme);
const $input_cursor = /*@__PURE__*/ _const("input_cursor", $input_cursor__OR__$global_theme);
const $setup$1 = $global_theme;
const $if = /*@__PURE__*/ _if("#text/0", "<div> </div>", "D ", $if_content__setup, "<span> </span>", "D ", $else_content__setup);
const $input$1 = ($scope, input) => {
	$input_cursor($scope, input.cursor);
	$input_text$1($scope, input.text);
};
const $input_text$1 = /*@__PURE__*/ _const("input_text", ($scope) => {
	$if($scope, $scope.input_text?.length > 2 ? 0 : 1);
	$if_content__input_text($scope);
	$else_content__input_text($scope);
});
const $highlight = ($scope) => function(text) {
	return text.replace($scope.input_cursor.test, (m) => `<b class=${_global_read($scope.$global, "theme")}>${$scope.input_cursor.content((s) => s)}</b>`);
};
_bind_resume("__tests__/tags/code-block.marko_0/highlight input_cursor", $highlight);
var code_block_default = /*@__PURE__*/ _template("__tests__/tags/code-block.marko", $template$1, "b%c", $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_cursor($scope["#childScope/0"], {
		test: /x/g,
		content: $cursor
	});
}
const $input_text = ($scope, input_text) => $input_text$1($scope["#childScope/0"], input_text);
const $input = ($scope, input) => $input_text($scope, input.text);
function $cursor(h) {
	return h("cursor");
}
_resumed["__tests__/template.marko_0/cursor"] = $cursor;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
