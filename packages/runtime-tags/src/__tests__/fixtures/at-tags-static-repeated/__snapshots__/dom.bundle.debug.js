// tags/list/index.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $for_content__dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/0");
const $for_content__item_content = $for_content__dynamicTag;
const $for_content__$params = ($scope, $params2) => $for_content__item_content($scope, $params2[0]?.content);
const $for = /* @__PURE__ */ _for_of("#text/0", "<!><!><!>", "b%c", 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);
const $input = ($scope, input) => $input_item($scope, input.item);
var list_default = /* @__PURE__ */ _template("__tests__/tags/list/index.marko", $template$1, "b%c", $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => `b/${_w0}&b`)("b%c");
const $item_content2 = /* @__PURE__ */ _content("__tests__/template.marko_2_content", "Again", "b");
const $item_content = /* @__PURE__ */ _content("__tests__/template.marko_1_content", "Hello", "b");
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$input_item($scope["#childScope/0"], attrTags(attrTag({ content: $item_content($scope) }), { content: $item_content2($scope) }));
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
