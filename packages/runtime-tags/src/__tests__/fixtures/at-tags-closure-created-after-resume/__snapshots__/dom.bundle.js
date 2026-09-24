// tags/list.marko
const $for_content__item_content = /* @__PURE__ */ _dynamic_tag(0);
const $for_content__$params = ($scope, $params2) => $for_content__item_content($scope, $params2[0]?.content);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<!><!><!>", "b%", 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);

// tags/child.marko
const $item_content__if = /*@__PURE__*/ _if(0, "<span>shown</span>");
const $item_content__input_show = /*@__PURE__*/ _closure_get(5, ($scope) => $item_content__if($scope, $scope._.e ? 0 : 1), 0, "b0", 4);
const $item_content = /*@__PURE__*/ _content("b1", "<!><!><!>", "b%", $item_content__input_show);
const $input_items = /*@__PURE__*/ _const(3, ($scope) => {
	let $item;
	forOf($scope.d, (item) => {
		$item = attrTags($item, { content: $item_content($scope) });
	});
	$input_item($scope.a, $item);
});

// template.marko
const $items = /*@__PURE__*/ _let(2, ($scope) => $input_items($scope.b, $scope.c));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$items($scope, [...$scope.c, $scope.c?.length + 1]);
}));
