// tags/field.marko
const $template$4 = "<label> </label><input><!><!>";
const $walks$4 = " D l b%c";
const $setup$4 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/3");
const $uid = ($scope, uid) => {
	_attr($scope["#label/0"], "for", uid);
	_attr($scope["#input/2"], "id", uid);
};
const $input_uid = ($scope, input_uid) => $uid($scope, input_uid || _id($scope, "IdFallback:uid"));
const $input_name = ($scope, input_name) => _text($scope["#text/1"], input_name);
const $input_heading = ($scope, input_heading) => _attr($scope["#input/2"], "aria-describedby", input_heading);
const $dynamicTag$2 = /*@__PURE__*/ _dynamic_tag("#text/3");
const $input_content$1 = $dynamicTag$2;
const $input$2 = ($scope, input) => {
	$input_content$1($scope, input.content);
	$input_uid($scope, input.uid);
	$input_name($scope, input.name);
	$input_heading($scope, input.heading);
};
var field_default = /*@__PURE__*/ _template("__tests__/tags/field.marko", $template$4, $walks$4, 0, $input$2);

// tags/forward.marko
const $template$3 = "<section><!></section><aside><!></aside>";
const $walks$3 = "D%lD%l";
const $setup$3 = ($_) => {};
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content = ($scope, input_content) => {
	$dynamicTag$1($scope, input_content);
	$dynamicTag2($scope, input_content);
};
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var forward_default = /*@__PURE__*/ _template("__tests__/tags/forward.marko", $template$3, $walks$3, 0, $input$1);

// tags/leaf.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $if_content__setup$1 = ($scope) => {
	$input_name($scope["#childScope/0"], "nested");
	$input_uid($scope["#childScope/0"]);
	$input_heading($scope["#childScope/0"]);
	$input_content$1($scope["#childScope/0"]);
};
const $if$1 = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$4), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$4), $if_content__setup$1);
function $setup$2($scope) {
	$if$1($scope, true ? 0 : 1);
}
var leaf_default = /*@__PURE__*/ _template("__tests__/tags/leaf.marko", $template$2, "b%c", $setup$2);

// tags/nested.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
function $setup$1($scope) {
	$setup$2($scope["#childScope/0"]);
}
var nested_default = /*@__PURE__*/ _template("__tests__/tags/nested.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $Item_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$4);
const $Item_content__template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$4);
const $Content_content__walks = "b%c";
const $Content_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0, _w1, _w2) => `<!><!><!>${_w0}${_w1}${_w2}<!>`)($Content_content__template, $template$3, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1, _w2) => `b%b%b/${_w0}&/${_w1}&/${_w2}&b`)($Content_content__walks, $walks$3, $walks$1);
const $forward_content__setup = ($scope) => {
	$input_name($scope["#childScope/0"], "forwarded");
	$input_uid($scope["#childScope/0"]);
	$input_heading($scope["#childScope/0"]);
	$input_content$1($scope["#childScope/0"]);
};
const $forward_content = /*@__PURE__*/ _content("__tests__/template.marko_8*content", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$4), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$4), $forward_content__setup);
const $item_content__setup = ($scope) => {
	$input_uid($scope["#childScope/0"]);
	$input_heading($scope["#childScope/0"]);
	$input_content$1($scope["#childScope/0"]);
};
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_7*content", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$4), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$4), $item_content__setup), { item_key: ($scope) => $input_name($scope["#childScope/0"], $scope.item_key) });
const $inputflipFieldsection_content__setup = ($scope) => {
	$input_name($scope["#childScope/0"], "content");
	$input_uid($scope["#childScope/0"]);
	$input_heading($scope["#childScope/0"]);
	$input_content$1($scope["#childScope/0"]);
};
const $inputflipFieldsection_content = _content("__tests__/template.marko_6*content", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$4), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$4), $inputflipFieldsection_content__setup);
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__item = $for_content__dynamicTag;
const $for_content__$params = ($scope, $params4) => $for_content__item($scope, $params4[0]);
const $Content_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", 0, $for_content__$params);
const $Content_content__items = ($scope, items) => $Content_content__for($scope, [items]);
const $Content_content__$params = ($scope, $params3) => $Content_content__$temp($scope, $params3[0]);
const $Content_content__$temp = ($scope, $temp2) => $Content_content__items($scope, $temp2.item);
const $else_content__setup = ($scope) => {
	$Item_content__setup($scope["#childScope/0"]);
	$Item_content__name($scope["#childScope/0"], "other");
};
const $if_content__setup = ($scope) => {
	$Item_content__setup($scope["#childScope/0"]);
	$Item_content__name($scope["#childScope/0"], "first");
};
const $Item_content__name = ($scope, name) => $input_name($scope["#childScope/0"], name);
const $Item_content__setup = ($scope) => {
	$input_uid($scope["#childScope/0"]);
	$input_heading($scope["#childScope/0"]);
	$input_content$1($scope["#childScope/0"]);
};
const $Item_content__$params = ($scope, $params2) => $Item_content__$temp($scope, $params2[0]);
const $Item_content__$temp = ($scope, $temp) => $Item_content__name($scope, $temp.name);
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Item_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Item_content__walks), $if_content__setup, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Item_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Item_content__walks), $else_content__setup);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1", $inputflipFieldsection_content);
const $input_flip = ($scope, input_flip) => {
	$dynamicTag($scope, input_flip ? field_default : "section", ($_) => ({ name: "dynamic" }));
	$if($scope, input_flip ? 0 : 1);
};
const $input_items = /*@__PURE__*/ _const("input_items", ($scope) => {
	let $item;
	forOf($scope.input_items, (item) => {
		$item = attrTags($item, { content: $item_content($scope, { item_key: item?.key }) });
	});
	$Content_content__items($scope["#childScope/2"], $item);
});
function $setup($scope) {
	$input_content($scope["#childScope/3"], $forward_content($scope));
	$setup$1($scope["#childScope/4"]);
}
const $input = ($scope, input) => {
	$input_flip($scope, input.flip);
	$input_items($scope, input.items);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
