// tags/list.marko
const $for_content__item_content = /* @__PURE__ */ _dynamic_tag(0);
const $for_content__$params = ($scope, $params2) => $for_content__item_content($scope, $params2[0]?.content);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<!><!><!>", "b%", 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);

// tags/probe.marko
const $get__script = _script("d0", ($scope) => {
	$scope.a.textContent = $scope.d();
	console.log("run", $scope.d());
});

// tags/child.marko
const $item_content__if = /*@__PURE__*/ _if(0, "<span>shown</span>");
const $item_content__s = /*@__PURE__*/ _closure_get(9, ($scope) => $item_content__if($scope, $scope._.c ? 0 : 1), 0, "b1");
const $item_content = /*@__PURE__*/ _content("b2", "<!><!><!>", "b%", $item_content__s);
const $if_content__items = /*@__PURE__*/ _if_closure(1, 0, ($scope) => {
	let $item;
	forOf($scope._.g, (item) => {
		$item = attrTags($item, { content: $item_content($scope) });
	});
	$input_item($scope.a, $item);
});
const $items = /*@__PURE__*/ _let(6, $if_content__items);
const $setup__script = _script("b3", ($scope) => _on($scope.a, "click", function() {
	$items($scope, [...$scope.g, $scope.g.length + 1]);
}));
const $get = ($scope) => function() {
	return "s:" + $scope.c;
};
_resumed.b0 = $get;
