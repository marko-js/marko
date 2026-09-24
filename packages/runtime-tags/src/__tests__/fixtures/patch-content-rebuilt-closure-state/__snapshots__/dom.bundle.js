// tags/list.marko
const $for_content__item_content = /* @__PURE__ */ _dynamic_tag(0);
const $for_content__$params = ($scope, $params2) => $for_content__item_content($scope, $params2[0]?.content);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<!><!><!>", "b%", 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);

// tags/child.marko
const $item_content__if = /*@__PURE__*/ _if(0, "<span>shown</span>");
const $item_content__input_show = /*@__PURE__*/ _fill_join_closure("b0", 4, /*@__PURE__*/ _closure_get(6, ($scope) => $item_content__if($scope, $scope._.e ? 0 : 1), 0, "b5", 4), 0);
const $item_content = /*@__PURE__*/ _content$1("b0", "<!><!><!>", "b%", $item_content__input_show);
const $items = /*@__PURE__*/ _fill_let("b1", 5, ($scope) => {
	let $item;
	forOf($scope.f, (item) => {
		$item = attrTags($item, { content: $item_content($scope) });
	});
	$input_item($scope.b, $item);
});
const $setup__script = _script("b2", ($scope) => _on($scope.a, "click", function() {
	$items($scope, [...$scope.f, $scope.f?.length + 1]);
}));
