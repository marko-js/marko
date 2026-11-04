// tags/list.marko
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $for_content__$params = ($scope, $params2) => $for_content__dynamicTag($scope, $params2[0]?.content);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<!><!><!>", "b%", 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);

// tags/probe.marko
const $get__script = _script_patch("d0 d", ($scope) => {
	$scope.a.textContent = $scope.d();
	console.log("run", $scope.d());
});

// tags/child.marko
const $item_content__if = /*@__PURE__*/ _if(0, "<span>shown</span>");
const $item_content__s = /*@__PURE__*/ _closure_get_patch("b5", 9, ($scope) => $item_content__if($scope, $scope._.c ? 0 : 1), 0, "b1", 0);
const $item_content = /*@__PURE__*/ _content$1("b3", "<!><!><!>", "b%", $item_content__s);
const $if_content__items = /*@__PURE__*/ _if_closure_patch("b11", 1, 0, ($scope) => {
	let $item;
	forOf($scope._.g, (item) => $item = attrTags($item, { content: $item_content($scope) }));
	$input_item($scope.a, $item);
});
const $items = /*@__PURE__*/ _fill_let("b8", 6, $if_content__items);
const $setup__script = _script("b7", ($scope) => _on($scope.a, "click", function() {
	$items($scope, [...$scope.g, $scope.g.length + 1]);
}));
const $get = ($scope) => function() {
	return "s:" + $scope.c;
};
_bind_resume("b0 c", $get);
