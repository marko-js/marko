// tags/rows.marko
const $template$5 = "<!><!><!>";
const $walks$5 = "b%c";
const $setup$5 = () => {};
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__row_content = $for_content__dynamicTag;
const $for_content__$params$1 = ($scope, $params2) => $for_content__row_content($scope, $params2[0]?.content);
const $for$1 = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", 0, $for_content__$params$1);
const $input_row$2 = ($scope, input_row) => $for$1($scope, [input_row]);
const $input$4 = ($scope, input) => $input_row$2($scope, input.row);
var rows_default = /*@__PURE__*/ _template("__tests__/tags/rows.marko", $template$5, "b%c", 0, $input$4);

// tags/of-rows.marko
const $template$4 = /*@__PURE__*/ ((_w0) => `<button id=show-of>show</button>${_w0}<!>`)($template$5);
const $walks$4 = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $if_content__dynamicTag$2 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__item_content = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag$2($scope, $scope._.item_content));
const $if_content__setup$2 = $if_content__item_content;
const $row_content__if$1 = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup$2);
const $row_content__show$1 = /*@__PURE__*/ _closure_get("show", ($scope) => $row_content__if$1($scope, $scope._.show ? 0 : 1), 0, "__tests__/tags/of-rows.marko_1_show#5/subscribe");
const $row_content__setup$1 = $row_content__show$1;
const $row_content$1 = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/tags/of-rows.marko_1*content", "<!><!><!>", "b%", $row_content__setup$1), { item_content: $if_content__item_content });
const $show__closure$2 = /*@__PURE__*/ _closure($row_content__show$1);
const $show$2 = /*@__PURE__*/ _let("show/5", $show__closure$2);
const $setup__script$3 = _script("__tests__/tags/of-rows.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show$2($scope, true);
}));
function $setup$4($scope) {
	$show$2($scope, false);
	$setup__script$3($scope);
}
const $input_item = /*@__PURE__*/ _const("input_item", ($scope) => {
	let $row;
	forOf($scope.input_item, (item) => {
		$row = attrTags($row, { content: $row_content$1($scope, { item_content: item?.content }) });
	});
	$input_row$2($scope["#childScope/1"], $row);
});
const $input$3 = ($scope, input) => $input_item($scope, input.item);
var of_rows_default = /*@__PURE__*/ _template("__tests__/tags/of-rows.marko", $template$4, $walks$4, $setup$4, $input$3);

// tags/in-rows.marko
const $template$3 = /*@__PURE__*/ ((_w0) => `<button id=show-in>show</button>${_w0}<!>`)($template$5);
const $walks$3 = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $if_content__dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__value_content = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag$1($scope, $scope._.value_content));
const $if_content__setup$1 = $if_content__value_content;
const $row_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup$1);
const $row_content__show = /*@__PURE__*/ _closure_get("show", ($scope) => $row_content__if($scope, $scope._.show ? 0 : 1), 0, "__tests__/tags/in-rows.marko_1_show#4/subscribe");
const $row_content__setup = $row_content__show;
const $row_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/tags/in-rows.marko_1*content", "<!><!><!>", "b%", $row_content__setup), { value_content: $if_content__value_content });
const $show__closure$1 = /*@__PURE__*/ _closure($row_content__show);
const $show$1 = /*@__PURE__*/ _let("show/4", $show__closure$1);
const $setup__script$2 = _script("__tests__/tags/in-rows.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show$1($scope, true);
}));
function $setup$3($scope) {
	$show$1($scope, false);
	$setup__script$2($scope);
}
const $input$2 = /*@__PURE__*/ _const("input", ($scope) => {
	let $row;
	forIn($scope.input, (key, value) => {
		$row = attrTags($row, { content: $row_content($scope, { value_content: value?.content }) });
	});
	$input_row$2($scope["#childScope/1"], $row);
});
var in_rows_default = /*@__PURE__*/ _template("__tests__/tags/in-rows.marko", $template$3, $walks$3, $setup$3, $input$2);

// tags/grid.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = () => {};
const $for_content2__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content2__cell_content = $for_content2__dynamicTag;
const $for_content2__$params = ($scope, $params3) => $for_content2__cell_content($scope, $params3[0]?.content);
const $for_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", 0, $for_content2__$params);
const $for_content__row_cell = ($scope, row_cell) => $for_content__for($scope, [row_cell]);
const $for_content__$params = ($scope, $params2) => $for_content__row_cell($scope, $params2[0]?.cell);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", 0, $for_content__$params);
const $input_row$1 = ($scope, input_row) => $for($scope, [input_row]);
const $input$1 = ($scope, input) => $input_row$1($scope, input.row);
var grid_default = /*@__PURE__*/ _template("__tests__/tags/grid.marko", $template$2, "b%c", 0, $input$1);

// tags/nested-rows.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<button id=show-nested>show</button>${_w0}<!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__cell_content = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.cell_content));
const $if_content__setup = $if_content__cell_content;
const $cell_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $cell_content__show = /*@__PURE__*/ _closure_get("show", ($scope) => $cell_content__if($scope, $scope._.show ? 0 : 1), 0, "__tests__/tags/nested-rows.marko_1_show#5/subscribe");
const $cell_content__setup$1 = $cell_content__show;
const $cell_content$1 = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/tags/nested-rows.marko_1*content", "<!><!><!>", "b%", $cell_content__setup$1), { cell_content: $if_content__cell_content });
const $show__closure = /*@__PURE__*/ _closure($cell_content__show);
const $show = /*@__PURE__*/ _let("show/5", $show__closure);
const $setup__script$1 = _script("__tests__/tags/nested-rows.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, true);
}));
function $setup$1($scope) {
	$show($scope, false);
	$setup__script$1($scope);
}
const $input_row = /*@__PURE__*/ _const("input_row", ($scope) => {
	let $row;
	forOf($scope.input_row, (row) => {
		let $cell;
		forOf(row.cell, (cell) => {
			$cell = attrTags($cell, { content: $cell_content$1($scope, { cell_content: cell?.content }) });
		});
		$row = attrTags($row, { cell: $cell });
	});
	$input_row$1($scope["#childScope/1"], $row);
});
const $input = ($scope, input) => $input_row($scope, input.row);
var nested_rows_default = /*@__PURE__*/ _template("__tests__/tags/nested-rows.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1, _w2) => `<button id=inc>inc</button>${_w0}${_w1}${_w2}<!>`)($template$4, $template$3, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1, _w2) => ` b/${_w0}&/${_w1}&/${_w2}&b`)($walks$4, $walks$3, $walks$1);
const $cell_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => _text($scope["#text/0"], $scope._.count), 0, "__tests__/template.marko_3_count#4/subscribe");
const $cell_content__setup = $cell_content__count;
const $cell_content = _content("__tests__/template.marko_3*content", "Cell <!>", "b%", $cell_content__setup);
const $item_content2__count = /*@__PURE__*/ _closure_get("count", ($scope) => _text($scope["#text/0"], $scope._.count), 0, "__tests__/template.marko_2_count#4/subscribe");
const $item_content2__setup = $item_content2__count;
const $item_content2 = _content("__tests__/template.marko_2*content", "In <!>", "b%", $item_content2__setup);
const $item_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => _text($scope["#text/0"], $scope._.count), 0, "__tests__/template.marko_1_count#4/subscribe");
const $item_content__setup = $item_content__count;
const $item_content = _content("__tests__/template.marko_1*content", "Of <!>", "b%", $item_content__setup);
const $count__closure = /*@__PURE__*/ _closure($item_content__count, $item_content2__count, $cell_content__count);
const $count = /*@__PURE__*/ _let("count/4", $count__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup$4($scope["#childScope/1"]);
	$input_item($scope["#childScope/1"], attrTag({ content: $item_content($scope) }));
	$setup$3($scope["#childScope/2"]);
	$input$2($scope["#childScope/2"], { item: attrTag({ content: $item_content2($scope) }) });
	$setup$1($scope["#childScope/3"]);
	$input_row($scope["#childScope/3"], attrTag({ cell: attrTag({ content: $cell_content($scope) }) }));
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
