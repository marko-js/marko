// tags/hello/index.marko
const $template$1 = "<!><!><!><!>";
const $walks$1 = "b%b%c";
const $setup$1 = () => {};
const $for_content3__row__script = _script("__tests__/tags/hello/index.marko_3_row", ($scope) => _attrs_script($scope, "#div/0"));
const $for_content3__row = /* @__PURE__ */ _const("row", ($scope) => {
	_attrs_partial($scope, "#div/0", $scope.row, { class: 1 });
	$for_content3__row_content($scope, $scope.row?.content);
	$for_content3__row__script($scope);
});
const $for_content3__dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/1");
const $for_content3__row_content = ($scope, row_content) => $for_content3__dynamicTag($scope, row_content);
const $for_content3__$params = ($scope, $params4) => $for_content3__row($scope, $params4[0]);
const $for_content2__col__script = _script("__tests__/tags/hello/index.marko_2_col", ($scope) => _attrs_script($scope, "#div/0"));
const $for_content2__col = /* @__PURE__ */ _const("col", ($scope) => {
	_attrs_partial_content($scope, "#div/0", $scope.col, { class: 1 });
	$for_content2__col_row($scope, $scope.col?.row);
	$for_content2__col__script($scope);
});
const $for_content2__for = /* @__PURE__ */ _for_of("#text/1", "<div class=row><!></div>", " D%l", 0, $for_content3__$params);
const $for_content2__col_row = ($scope, col_row) => $for_content2__for($scope, [col_row]);
const $for_content2__$params = ($scope, $params3) => $for_content2__col($scope, $params3[0]);
const $for_content__item__script = _script("__tests__/tags/hello/index.marko_1_item", ($scope) => _attrs_script($scope, "#div/0"));
const $for_content__item = /* @__PURE__ */ _const("item", ($scope) => {
	_attrs_partial($scope, "#div/0", $scope.item, { class: 1 });
	$for_content__item_content($scope, $scope.item?.content);
	$for_content__item__script($scope);
});
const $for_content__dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/1");
const $for_content__item_content = ($scope, item_content) => $for_content__dynamicTag($scope, item_content);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /* @__PURE__ */ _for_of("#text/0", "<div class=item><!></div>", " D%l", 0, $for_content__$params);
const $input_list_item = ($scope, input_list_item) => $for($scope, [input_list_item]);
const $for2 = /* @__PURE__ */ _for_of("#text/1", "<div class=col></div><!><!>", " b%c", 0, $for_content2__$params);
const $input_col = ($scope, input_col) => $for2($scope, [input_col]);
const $input = ($scope, input) => {
	$input_list($scope, input.list);
	$input_col($scope, input.col);
};
const $input_list = ($scope, input_list) => $input_list_item($scope, input_list?.item);
var hello_default = /* @__PURE__ */ _template("__tests__/tags/hello/index.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => `b/${_w0}&b`)($walks$1);
const $row_content2 = _content_resume("__tests__/template.marko_4_content", "Outside", "b");
const $row_content = /* @__PURE__ */ _content_closures(_content_resume("__tests__/template.marko_3_content", " ", " b"), { row($scope) {
	_text($scope["#text/0"], $scope.row);
} });
const $item_content2 = _content_resume("__tests__/template.marko_2_content", "bar", "b");
const $item_content = _content_resume("__tests__/template.marko_1_content", "foo", "b");
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	let $item;
	forOf([
		"red",
		"blue",
		"green"
	], (color) => {
		if (color === "red") {
			$item = attrTags($item, {
				style: { color },
				content: $item_content($scope)
			});
		} else {
			$item = attrTags($item, {
				style: { color },
				content: $item_content2($scope)
			});
		}
	});
	$input_list_item($scope["#childScope/0"], $item);
	let $col;
	forOf([["a", "b"], ["c", "d"]], (col, i) => {
		let $row;
		forOf(col, (row) => {
			$row = attrTags($row, {
				row,
				content: $row_content($scope, { row })
			});
		});
		$col = attrTags($col, {
			x: i,
			row: $row
		});
	});
	$col = attrTags($col, {
		outside: true,
		row: attrTag({
			row: -1,
			content: $row_content2($scope)
		})
	});
	$input_col($scope["#childScope/0"], $col);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
