// tags/list.marko
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $for_content__$params = ($scope, $params2) => $for_content__dynamicTag($scope, $params2[0]?.content);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<!><!><!>", "b%", 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);

// template.marko
const $for_content__firstExtra = /*@__PURE__*/ _closure_get(17, ($scope) => _text($scope.a, $scope._._.o), ($scope) => $scope._._, "a6");
const $item_content4__r__script = _script("a2", ($scope) => _attrs_script($scope, "a"));
const $item_content2 = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("a0", "<p><!>:<!></p>", "D%c%"), {
	2: ($scope) => _text($scope.a, $scope.c),
	3: ($scope) => _text($scope.b, $scope.d)
});
const $items = /*@__PURE__*/ _let(9, ($scope) => {
	let $item;
	forOf($scope.j, ({ id, ...rest }) => $item = attrTags($item, { content: $item_content2($scope, {
		2: id,
		3: rest.extra
	}) }));
	$input_item($scope.b, $item);
	$temp4($scope, $scope.j?.[0]);
});
const $temp4 = /*@__PURE__*/ _const(13, ($scope) => $firstExtra($scope, $scope.n?.extra));
const $firstExtra = /*@__PURE__*/ _const(14, /* @__PURE__ */ _closure($for_content__firstExtra));
const $setup__script = _script("a8", ($scope) => _on($scope.a, "click", function() {
	$items($scope, $scope.j.map((it) => ({
		...it,
		extra: it.extra + "!"
	})));
}));
