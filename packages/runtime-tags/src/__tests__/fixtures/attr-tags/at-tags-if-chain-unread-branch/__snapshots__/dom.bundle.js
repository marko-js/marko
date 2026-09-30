// tags/child.marko
const $for_content__it_content = /* @__PURE__ */ _dynamic_tag(0);
const $for_content__$params = ($scope, $params2) => $for_content__it_content($scope, $params2[0]?.content);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<!><!><!>", "b%", 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);

// template.marko
const $item_content = /*@__PURE__*/ _content("a0", "A");
const $mode = /*@__PURE__*/ _let(2, ($scope) => {
	let $item;
	if ($scope.c === 0) $item = attrTag({ content: $item_content($scope) });
	$input_item($scope.b, $item);
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$mode($scope, 1 - $scope.c);
}));
