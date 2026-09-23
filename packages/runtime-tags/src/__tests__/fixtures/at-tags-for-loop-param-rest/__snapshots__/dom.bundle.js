// tags/list.marko
const $for_content__item_content = /* @__PURE__ */ _dynamic_tag(0);
const $for_content__$params = ($scope, $params2) => $for_content__item_content($scope, $params2[0]?.content);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<!><!><!>", "b%", 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);

// template.marko
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("a0", "<p><!>:<!></p>", "D%c%"), {
	6($scope) {
		_text($scope.a, $scope.g);
	},
	7($scope) {
		_text($scope.b, $scope.h);
	}
});
const $items = /*@__PURE__*/ _let(3, ($scope) => {
	let $item;
	forOf($scope.d, ({ id, ...rest }) => {
		$item = attrTags($item, { content: $item_content($scope, {
			6: id,
			7: rest.extra
		}) });
	});
	$input_item($scope.b, $item);
});
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$items($scope, $scope.d.map((it) => ({
		...it,
		extra: it.extra + "!"
	})));
}));
