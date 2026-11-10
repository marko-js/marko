// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $content_content__item_key = /*@__PURE__*/ _closure_get("item_key/6", ($scope) => _text($scope["#text/0"], $scope._.item_key), 0, "__tests__/template.marko_2_item_key#1:4/subscribe");
const $content_content__setup = $content_content__item_key;
const $content_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<b> </b>", "D ", $content_content__setup);
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__$params = ($scope, $params2) => {
	$for_content__dynamicTag($scope, $params2[0]?.on ? "p" : "div", ($_) => ({ content: attrTag({ content: $content_content($scope) }) }));
	$for_content__item_key($scope, $params2[0]?.key);
};
const $for_content__item_key__closure = /*@__PURE__*/ _closure($content_content__item_key);
const $for_content__item_key = /*@__PURE__*/ _const("item_key", $for_content__item_key__closure);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", 0, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
