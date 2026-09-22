// tags/list.marko
const $for_content__item_content = /* @__PURE__ */ _dynamic_tag(0);
const $for_content__$params = ($scope, $params2) => $for_content__item_content($scope, $params2[0]?.content);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<!><!><!>", "b%", 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);

// template.marko
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("a0", "<p><!>|<!></p>", "D%c%"), {
	2($scope) {
		_text($scope.a, $scope.c);
	},
	3($scope) {
		_text($scope.b, JSON.stringify($scope.d));
	}
});
const $items = /*@__PURE__*/ _let(2, ($scope) => {
	let $item;
	forOf($scope.c, (item) => {
		$item = attrTags($item, { content: $item_content($scope, {
			2: item?.text,
			3: item
		}) });
	});
	$input_item($scope.b, $item);
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$items($scope, $scope.c.map((it) => ({ text: it.text + "!" })));
}));
