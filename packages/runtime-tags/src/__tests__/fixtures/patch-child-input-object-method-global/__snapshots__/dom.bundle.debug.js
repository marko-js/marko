// tags/code-block.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $else_content__input_text__OR__highlight = /*@__PURE__*/ _or(1, ($scope) => _html($scope, $scope._.highlight($scope._.input_text), "#text/0"));
const $else_content__input_text = /*@__PURE__*/ _if_closure("#text/0", 1, $else_content__input_text__OR__highlight);
const $else_content__setup = ($scope) => {
	$else_content__input_text._($scope);
	$else_content__highlight._($scope);
};
const $else_content__highlight = /*@__PURE__*/ _if_closure("#text/0", 1, $else_content__input_text__OR__highlight);
const $if_content__input_text__OR__highlight = /*@__PURE__*/ _or(1, ($scope) => _html($scope, $scope._.highlight($scope._.input_text), "#text/0"));
const $if_content__input_text = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_text__OR__highlight);
const $if_content__setup = ($scope) => {
	$if_content__input_text._($scope);
	$if_content__highlight._($scope);
};
const $if_content__highlight = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_text__OR__highlight);
const $highlight2 = /*@__PURE__*/ _fill_const("__tests__/tags/code-block.marko1", "highlight", ($scope) => {
	$if_content__highlight($scope);
	$else_content__highlight($scope);
});
const $input_cursor__OR__$global_theme = /*@__PURE__*/ _global_join("theme", "__tests__/tags/code-block.marko_0_input_cursor#3_$global_theme#7/global", ($scope) => {
	$highlight2($scope, $highlight($scope));
});
const $input_cursor = /*@__PURE__*/ _const("input_cursor", $input_cursor__OR__$global_theme);
const $global_theme = /*@__PURE__*/ _global_join("theme", "__tests__/tags/code-block.marko_0_$global_theme#7/global", ($scope) => {});
const $if = /*@__PURE__*/ _if("#text/0", "<div> </div>", "D ", $if_content__setup, "<span> </span>", "D ", $else_content__setup);
const $input_text_length = ($scope, input_text_length) => $if($scope, input_text_length > 2 ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_cursor($scope, input.cursor);
	$input_text$1($scope, input.text);
};
const $input_text$1 = /*@__PURE__*/ _fill_const("__tests__/tags/code-block.marko0", "input_text", ($scope) => {
	$if_content__input_text($scope);
	$else_content__input_text($scope);
	$input_text_length($scope, $scope.input_text?.length);
}, ($scope) => {
	$if_content__input_text($scope);
	$else_content__input_text($scope);
});
function $setup$1($scope) {
	$global_theme($scope, $scope.$global.theme);
}
const $highlight = ($scope) => function(text) {
	return text.replace($scope.input_cursor.test, (m) => `<b class=${$scope.$global.theme}>${$scope.input_cursor.content((s) => s)}</b>`);
};
_resume("__tests__/tags/code-block.marko_0/highlight", $highlight);
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
_resume("__tests__/template.marko_0/cursor", $cursor);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
