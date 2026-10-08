// tags/layout.marko
const $template$1 = "<main><h1> </h1><!><header><!></header><ul></ul><ol></ol></main>";
const $walks$1 = "E l%bD%l b l";
const $setup$1 = () => {};
const $input_header_direct = /*@__PURE__*/ _dynamic_tag_content("#text/2");
const $for_content2__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $for_content2__input_content = /*@__PURE__*/ _fill_join("__tests__/tags/layout.marko_fill0", "input_content", /*@__PURE__*/ _for_closure("#ol/4", ($scope) => $for_content2__dynamicTag($scope, $scope._.input_content)));
const $for_content2__setup = $for_content2__input_content;
const $for_content2__n = ($scope, n) => _text($scope["#text/0"], n);
const $for_content2__$params = ($scope, $params3) => $for_content2__n($scope, $params3[0]);
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $for_content__input_row = /*@__PURE__*/ _fill_join("__tests__/tags/layout.marko_fill1", "input_row", /*@__PURE__*/ _for_closure("#ul/3", ($scope) => $for_content__dynamicTag($scope, $scope._.input_row)));
const $for_content__setup = $for_content__input_row;
const $for_content__n = ($scope, n) => _text($scope["#text/0"], n);
const $for_content__$params = ($scope, $params2) => $for_content__n($scope, $params2[0]);
const $input_title$1 = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content = /*@__PURE__*/ _fill_const("__tests__/tags/layout.marko_fill0", "input_content", ($scope) => {
	$dynamicTag($scope, $scope.input_content);
	$for_content2__input_content($scope);
});
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/2");
const $input_header = $dynamicTag2;
const $for = /*@__PURE__*/ _for_of_unkeyed("#ul/3", "<li><!><!></li>", "D%b%", $for_content__setup, $for_content__$params);
const $for2 = /*@__PURE__*/ _for_of_unkeyed("#ol/4", "<li><!><!></li>", "D%b%", $for_content2__setup, $for_content2__$params);
const $input_rows$1 = ($scope, input_rows) => {
	$for($scope, [input_rows]);
	$for2($scope, [input_rows]);
};
const $input$1 = ($scope, input) => {
	$input_header($scope, input.header);
	$input_title$1($scope, input.title);
	$input_content($scope, input.content);
	$input_rows$1($scope, input.rows);
	$input_row($scope, input.row);
};
const $input_row = /*@__PURE__*/ _fill_const("__tests__/tags/layout.marko_fill1", "input_row", $for_content__input_row);
var layout_default = /*@__PURE__*/ _template("__tests__/tags/layout.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $layout_content__input_text = /*@__PURE__*/ _closure_get("input_text/6", ($scope) => _text($scope["#text/0"], $scope._.input_text), 0, "__tests__/template.marko_3_input_text#0:5/subscribe");
const $layout_content__setup = $layout_content__input_text;
const $layout_content = _content("__tests__/template.marko_3*content", "<p> <input></p>", "D ", $layout_content__setup);
const $row_content__input_text = /*@__PURE__*/ _closure_get("input_text/6", ($scope) => _text($scope["#text/0"], $scope._.input_text), 0, "__tests__/template.marko_2_input_text#0:5/subscribe");
const $row_content__setup = $row_content__input_text;
const $row_content = _content("__tests__/template.marko_2*content", "<em> <input></em>", "D ", $row_content__setup);
const $header_content__input_text = /*@__PURE__*/ _shell_subscribe_closure_get("__tests__/template.marko_1_input_text#0:5/init", "input_text/6", ($scope) => _text($scope["#text/0"], $scope._.input_text), 0, "__tests__/template.marko_1_input_text#0:5/subscribe");
const $header_content__setup = $header_content__input_text;
const $header_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<b> <input></b>", "D ", $header_content__setup);
function $setup($scope) {
	$input_header($scope["#childScope/0"], attrTag({ content: $header_content($scope) }));
	$input_row($scope["#childScope/0"], attrTag({ content: $row_content($scope) }));
	$input_content($scope["#childScope/0"], $layout_content($scope));
}
const $input_title = ($scope, input_title) => $input_title$1($scope["#childScope/0"], input_title);
const $input_rows = ($scope, input_rows) => $input_rows$1($scope["#childScope/0"], input_rows);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_rows($scope, input.rows);
	$input_text($scope, input.text);
};
const $input_text__closure = /*@__PURE__*/ _closure($header_content__input_text, $row_content__input_text, $layout_content__input_text);
const $input_text = /*@__PURE__*/ _const("input_text", $input_text__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
