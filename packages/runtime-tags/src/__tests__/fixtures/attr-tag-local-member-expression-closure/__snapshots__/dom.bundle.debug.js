// template.marko
const $Child_content__walks = "b%c", $Child_content__template = "<!><!><!>";
const $template = "<!><!><!>";
const $walks = "b%c";
const $item_content = /* @__PURE__ */ _content_closures(/* @__PURE__ */ _content("__tests__/template.marko_4_content", " ", " b"), { item_text($scope) {
	_text($scope["#text/0"], $scope.item_text);
} });
const $for_content2__dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/0");
const $for_content2__item = $for_content2__dynamicTag;
const $for_content2__$params = ($scope, $params3) => $for_content2__item($scope, $params3[0]);
const $for_content__texts = /* @__PURE__ */ _const("texts", ($scope) => {
	let $item;
	forOf($scope.texts, (item) => {
		$item = attrTags($item, { content: $item_content($scope, { item_text: item?.text }) });
	});
	$Child_content__items($scope["#childScope/0"], $item);
});
const $for_content__$params = ($scope, $params4) => $for_content__texts($scope, $params4[0]);
const $Child_content__for = /* @__PURE__ */ _for_of("#text/0", "<!><!><!>", "b%c", 0, $for_content2__$params);
const $Child_content__items = ($scope, items) => $Child_content__for($scope, [items]);
const $Child_content__$params = ($scope, $params2) => $Child_content__$temp($scope, $params2?.[0]);
const $Child_content__$temp = ($scope, $temp) => $Child_content__items($scope, $temp.item);
const $for = /* @__PURE__ */ _for_of("#text/0", /* @__PURE__ */ ((_w0) => `<!>${_w0}<!>`)($Child_content__template), /* @__PURE__ */ ((_w0) => `b/${_w0}&b`)($Child_content__walks), 0, $for_content__$params);
function $setup($scope) {
	$for($scope, [[[{ text: "hello" }, { text: "world" }]]]);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "b%c", $setup);
