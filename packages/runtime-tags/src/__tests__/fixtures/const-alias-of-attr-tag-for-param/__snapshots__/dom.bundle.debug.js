// tags/list/index.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__row = $for_content__dynamicTag;
const $for_content__$params = ($scope, $params2) => $for_content__row($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", 0, $for_content__$params);
const $input_row = ($scope, input_row) => $for($scope, [input_row]);
const $input$1 = ($scope, input) => $input_row($scope, input.row);
var list_default = /*@__PURE__*/ _template("__tests__/tags/list/index.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = () => {};
const $row_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_1*content", "<span> </span>", "D "), { x($scope) {
	_text($scope["#text/0"], $scope.x);
} });
const $input_items = /*@__PURE__*/ _const("input_items", ($scope) => {
	let $row;
	forOf($scope.input_items, (item) => {
		$row = attrTags($row, { content: $row_content($scope, { x: item }) });
	});
	$input_row($scope["#childScope/0"], $row);
});
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
