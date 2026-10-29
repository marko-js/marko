// tags/field.marko
const $template$1 = "<label> </label><input>";
const $walks$1 = " D l b";
const $setup$1 = ($_) => {};
const $uid = ($scope, uid) => {
	_attr($scope["#label/0"], "for", uid);
	_attr($scope["#input/2"], "id", uid);
};
const $input_uid = ($scope, input_uid) => $uid($scope, input_uid || _id($scope, "IdFallback:uid"));
const $input_name = ($scope, input_name) => _text($scope["#text/1"], input_name);
const $input_heading = ($scope, input_heading) => _attr($scope["#input/2"], "aria-describedby", input_heading);
const $input$1 = ($scope, input) => {
	$input_uid($scope, input.uid);
	$input_name($scope, input.name);
	$input_heading($scope, input.heading);
};
var field_default = /*@__PURE__*/ _template("__tests__/tags/field.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $Content_content__walks = "b%c";
const $Content_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Content_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Content_content__walks);
const $setup = ($_) => {};
const $item_content4__setup = ($scope) => {
	$input_uid($scope["#childScope/0"]);
	$input_heading($scope["#childScope/0"]);
};
const $item_content4 = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_6*content", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $item_content4__setup), { i: ($scope) => $input_name($scope["#childScope/0"], $scope.i) });
const $item_content3__setup = ($scope) => {
	$input_uid($scope["#childScope/0"]);
	$input_heading($scope["#childScope/0"]);
};
const $item_content3 = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_5*content", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $item_content3__setup), { i: ($scope) => $input_name($scope["#childScope/0"], $scope.i) });
const $item_content2__setup = ($scope) => {
	$input_uid($scope["#childScope/0"]);
	$input_heading($scope["#childScope/0"]);
};
const $item_content2 = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_4*content", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $item_content2__setup), { key: ($scope) => $input_name($scope["#childScope/0"], $scope.key) });
const $item_content__setup = ($scope) => {
	$input_uid($scope["#childScope/0"]);
	$input_heading($scope["#childScope/0"]);
};
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_3*content", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $item_content__setup), { item: ($scope) => $input_name($scope["#childScope/0"], $scope.item) });
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__item = $for_content__dynamicTag;
const $for_content__$params = ($scope, $params3) => $for_content__item($scope, $params3[0]);
const $Content_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", 0, $for_content__$params);
const $Content_content__items = ($scope, items) => $Content_content__for($scope, [items]);
const $Content_content__$params = ($scope, $params2) => $Content_content__$temp($scope, $params2[0]);
const $Content_content__$temp = ($scope, $temp) => $Content_content__items($scope, $temp.item);
const $input_items__OR__input_record__OR__input_end = /*@__PURE__*/ _fill("__tests__/template.marko_fill2", "input_end", /*@__PURE__*/ _fill("__tests__/template.marko_fill1", "input_record", /*@__PURE__*/ _fill("__tests__/template.marko_fill0", "input_items", /*@__PURE__*/ _or(6, ($scope) => {
	let $item;
	forOf($scope.input_items, (item) => {
		$item = attrTags($item, { content: $item_content($scope, { item }) });
	});
	forIn($scope.input_record, (key, value) => {
		$item = attrTags($item, { content: $item_content2($scope, { key }) });
	});
	forTo($scope.input_end, 0, 1, (i) => {
		$item = attrTags($item, { content: $item_content3($scope, { i }) });
	});
	forUntil($scope.input_end, 0, 1, (i) => {
		$item = attrTags($item, { content: $item_content4($scope, { i }) });
	});
	$Content_content__items($scope["#childScope/0"], $item);
}, 2))));
const $input_items = /*@__PURE__*/ _const("input_items", $input_items__OR__input_record__OR__input_end);
const $input_record = /*@__PURE__*/ _const("input_record", $input_items__OR__input_record__OR__input_end);
const $input_end = /*@__PURE__*/ _const("input_end", $input_items__OR__input_record__OR__input_end);
const $input = ($scope, input) => {
	$input_items($scope, input.items);
	$input_record($scope, input.record);
	$input_end($scope, input.end);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
