// tags/hello/index.marko
const $template$1 = "<!><!><!><!>";
const $walks$1 = "b%b%c";
const $setup$1 = () => {};
const $for_content3__attrs__script = _script("__tests__/tags/hello/index.marko_3_attrs", ($scope) => _attrs_script($scope, "#div/0"));
const $for_content3__attrs = /* @__PURE__ */ _const("attrs", ($scope) => {
	_attrs_partial($scope, "#div/0", $scope.attrs, { class: 1 });
	$for_content3__attrs__script($scope);
});
const $for_content3__dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/1");
const $for_content3__content = $for_content3__dynamicTag;
const $for_content3__$params = ($scope, $params4) => $for_content3__$temp($scope, $params4?.[0]);
const $for_content3__$temp = ($scope, $temp3) => {
	(({ content, ...attrs }) => $for_content3__attrs($scope, attrs))($temp3);
	$for_content3__content($scope, $temp3.content);
};
const $for_content2__attrs__script = _script("__tests__/tags/hello/index.marko_2_attrs", ($scope) => _attrs_script($scope, "#div/0"));
const $for_content2__attrs = /* @__PURE__ */ _const("attrs", ($scope) => {
	_attrs_partial_content($scope, "#div/0", $scope.attrs, { class: 1 });
	$for_content2__attrs__script($scope);
});
const $for_content2__for = /* @__PURE__ */ _for_of("#text/1", "<div class=row><!></div>", " D%l", 0, $for_content3__$params);
const $for_content2__row = ($scope, row) => $for_content2__for($scope, [row]);
const $for_content2__$params = ($scope, $params3) => $for_content2__$temp($scope, $params3?.[0]);
const $for_content2__$temp = ($scope, $temp2) => {
	(({ content, row, ...attrs }) => $for_content2__attrs($scope, attrs))($temp2);
	$for_content2__row($scope, $temp2.row);
};
const $for_content__attrs__script = _script("__tests__/tags/hello/index.marko_1_attrs", ($scope) => _attrs_script($scope, "#div/0"));
const $for_content__attrs = /* @__PURE__ */ _const("attrs", ($scope) => {
	_attrs_partial($scope, "#div/0", $scope.attrs, { class: 1 });
	$for_content__attrs__script($scope);
});
const $for_content__dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/1");
const $for_content__content = $for_content__dynamicTag;
const $for_content__$params = ($scope, $params2) => $for_content__$temp($scope, $params2?.[0]);
const $for_content__$temp = ($scope, $temp) => {
	(({ content, ...attrs }) => $for_content__attrs($scope, attrs))($temp);
	$for_content__content($scope, $temp.content);
};
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
