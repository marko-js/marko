// tags/child.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $input_item_content = $dynamicTag;
const $input_item = ($scope, input_item) => $input_item_content($scope, input_item?.content);

// template.marko
const $item_content = /*@__PURE__*/ _content("a0", "item");
const $n = /*@__PURE__*/ _let(3, ($scope) => {
	let $item;
	if ($scope.d) $item = attrTag({ content: $item_content($scope) });
	$input_item($scope.a, $item);
});
const $setup__script = _script("a1", ($scope) => _on($scope.c, "click", function() {
	$n($scope, +$scope.d + 1);
}));
