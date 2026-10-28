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
const $item_content__input_show = /*@__PURE__*/ _init_resume("b3", _closure_resume("b8", /*@__PURE__*/ _fill_closure("b5", 5, /*@__PURE__*/ _closure_get(7, ($scope) => $item_content__if($scope, $scope._.f ? 0 : 1)), 0)));
const $item_content = /*@__PURE__*/ _content$1("b2", "<!><!><!>", "b%", $item_content__input_show);
const $items = /*@__PURE__*/ _fill_let("b6", 6, ($scope) => {
	let $item;
	forOf($scope.g, (item) => {
		$item = attrTags($item, { content: $item_content($scope) });
	});
	$input_item($scope.b, $item);
});
const $setup__script = _script("b4", ($scope) => _on($scope.a, "click", function() {
	$items($scope, [...$scope.g, $scope.g.length + 1]);
}));
const $get = ($scope) => function() {
	return "s:" + $scope.f;
};
_bind_resume("b0 f", $get);
