// tags/list.marko
const $for_content__item_content = /* @__PURE__ */ _dynamic_tag(0);
const $for_content__$params = ($scope, $params2) => $for_content__item_content($scope, $params2[0]?.content);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<!><!><!>", "b%", 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);

// template.marko
const $if_content__aa = /*@__PURE__*/ _if_closure(2, 0, ($scope) => _text($scope.a, $scope._.d));
const $item_content__if = /*@__PURE__*/ _if(2, "<span> </span>", "D ", $if_content__aa);
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("a0", "<p><!>:<!></p><!><!>", "D%c%l%", /* @__PURE__ */ _closure_get(5, ($scope) => $item_content__if($scope, $scope._.d ? 0 : 1))), {
	3($scope) {
		_text($scope.b, $scope.d);
		$if_content__aa($scope);
	},
	4($scope) {
		_text($scope.a, $scope.e);
	}
});
const $items = /*@__PURE__*/ _let(4, ($scope) => {
	let $item;
	forOf($scope.e, ({ a: aa = "default" }, index) => {
		$item = attrTags($item, { content: $item_content($scope, {
			3: aa,
			4: index
		}) });
	});
	$input_item($scope.b, $item);
});
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$items($scope, $scope.e.map((it) => ({ a: (it.a || "y") + "!" })));
}));
