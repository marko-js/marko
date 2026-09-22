// tags/inner.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = () => {};
const $for_content__dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__cell_content = $for_content__dynamicTag$1;
const $for_content__$params$1 = ($scope, $params2) => $for_content__cell_content($scope, $params2[0]?.content);
const $for$1 = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<span><!></span>", "D%", 0, $for_content__$params$1);
const $input_cell = ($scope, input_cell) => $for$1($scope, [input_cell]);
const $input$1 = ($scope, input) => $input_cell($scope, input.cell);
var inner_default = /*@__PURE__*/ _template("__tests__/tags/inner.marko", $template$2, "b%c", 0, $input$1);

// tags/outer.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__row_content = $for_content__dynamicTag;
const $for_content__$params = ($scope, $params2) => $for_content__row_content($scope, $params2[0]?.content);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<div><!></div>", "D%", 0, $for_content__$params);
const $input_row = ($scope, input_row) => $for($scope, [input_row]);
const $input = ($scope, input) => $input_row($scope, input.row);
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, "b%c", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>Add</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)("b%c");
const $cell_content__a_id = /*@__PURE__*/ _closure_get("a_id", ($scope) => _text($scope["#text/0"], $scope._.a_id));
const $cell_content__setup = $cell_content__a_id;
const $cell_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_2*content", "<!>-<!>;", "%c%", $cell_content__setup), { b($scope) {
	_text($scope["#text/1"], $scope.b);
} });
const $row_content__a_id__closure = /*@__PURE__*/ _closure($cell_content__a_id);
const $row_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_1*content", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")), {
	a_items($scope) {
		let $cell;
		forOf($scope.a_items, (b) => {
			$cell = attrTags($cell, { content: $cell_content($scope, { b }) });
		});
		$input_cell($scope["#childScope/0"], $cell);
	},
	a_id: $row_content__a_id__closure
});
const $rows = /*@__PURE__*/ _let("rows/2", ($scope) => {
	let $row;
	forOf($scope.rows, (a) => {
		$row = attrTags($row, { content: $row_content($scope, {
			a_items: a?.items,
			a_id: a?.id
		}) });
	});
	$input_row($scope["#childScope/0"], $row);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$rows($scope, [...$scope.rows, {
		id: 2,
		items: [30]
	}]);
}));
function $setup($scope) {
	$rows($scope, [{
		id: 1,
		items: [10, 20]
	}]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
