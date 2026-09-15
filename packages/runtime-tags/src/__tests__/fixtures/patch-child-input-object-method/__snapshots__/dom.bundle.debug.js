// tags/code-block.marko
const $template$1 = "<div> </div>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $input_text__OR__highlight = /*@__PURE__*/ _or(6, ($scope) => _html($scope, $scope.highlight($scope.input_text), "#text/0"));
const $highlight2 = /*@__PURE__*/ _const("highlight", $input_text__OR__highlight);
const $input_cursor = /*@__PURE__*/ _const("input_cursor", ($scope) => $highlight2($scope, $highlight($scope)));
const $input_text$1 = /*@__PURE__*/ _const("input_text", $input_text__OR__highlight);
const $input$1 = ($scope, input) => {
	$input_cursor($scope, input.cursor);
	$input_text$1($scope, input.text);
};
const $highlight = ($scope) => function(text) {
	return text.replace($scope.input_cursor.test, (m) => `<b>${$scope.input_cursor.content((s) => s)}</b>`);
};
_resume("__tests__/tags/code-block.marko_0/highlight", $highlight);
var code_block_default = /*@__PURE__*/ _template("__tests__/tags/code-block.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
const $input_text = ($scope, input_text) => $input_text$1($scope["#childScope/0"], input_text);
function $setup($scope) {
	$input_cursor($scope["#childScope/0"], {
		test: /x/g,
		content: $cursor
	});
}
const $input = ($scope, input) => $input_text($scope, input.text);
function $cursor(h) {
	return h("cursor");
}
_resume("__tests__/template.marko_0/cursor", $cursor);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
