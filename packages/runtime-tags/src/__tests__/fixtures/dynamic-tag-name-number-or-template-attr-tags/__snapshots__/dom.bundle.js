// tags/list.marko
const $template = "<ul></ul><!><!>";
const $walks = " b%c";
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $for_content__$params = ($scope, item) => $for_content__dynamicTag($scope, item?.content);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<li><!></li>", "D%", 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag(1);
const $input_content = $dynamicTag$1;
const $input = ($scope, input) => {
	$input_item($scope, input.item);
	$input_content($scope, input.content);
};
var list_default = /*@__PURE__*/ _template("b", $template, $walks, 0, $input);

// template.marko
const $item_content2 = /*@__PURE__*/ _content("a1", "two");
const $item_content = /*@__PURE__*/ _content("a0", "one");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0, /* @__PURE__ */ _content("a2", "<em>after</em>"));
const $hidden = /*@__PURE__*/ _let(2, ($scope) => $dynamicTag($scope, $scope.c ? +$scope.c - 1 : list_default, ($_) => ({ item: attrTags(attrTag({ content: $item_content($scope) }), { content: $item_content2($scope) }) })));
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$hidden($scope, !$scope.c);
}));
