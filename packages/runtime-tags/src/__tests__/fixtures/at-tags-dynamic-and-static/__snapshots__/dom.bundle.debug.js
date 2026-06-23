// tags/hello/index.marko
const $template$1 = "<!><!><!><!>";
const $walks$1 = "b%b%c";
const $setup$1 = () => {};
const $input_other_direct = /* @__PURE__ */ _dynamic_tag_content("#text/1");
const $for_content__dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/0");
const $for_content__item_content = $for_content__dynamicTag;
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for_content__item = ($scope, item) => $for_content__item_content($scope, item?.content);
const $for = /* @__PURE__ */ _for_of("#text/0", "<!><!><!>", "b%c", 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/1");
const $input_other = $dynamicTag;
const $input = ($scope, input) => {
	$input_item($scope, input.item);
	$input_other($scope, input.other);
};
var hello_default = /* @__PURE__ */ _template("__tests__/tags/hello/index.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => `b/${_w0}&b`)($walks$1);
const $other_content = /* @__PURE__ */ _content("__tests__/template.marko_2_content", "other", "b");
const $item_content = /* @__PURE__ */ _content_closures(/* @__PURE__ */ _content("__tests__/template.marko_1_content", "<!>:<!>", "%c%b"), {
	a($scope) {
		_text($scope["#text/0"], $scope.a);
	},
	v($scope) {
		_text($scope["#text/1"], $scope.v);
	}
});
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$input_other($scope["#childScope/0"], attrTag({ content: $other_content($scope) }));
	let $item;
	forIn({
		a: 1,
		b: 2
	}, (a, v) => {
		$item = attrTags($item, { content: $item_content($scope, {
			a,
			v
		}) });
	});
	$input_item($scope["#childScope/0"], $item);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
