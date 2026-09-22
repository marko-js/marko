// tags/list.marko
const $for_content__item_content = /* @__PURE__ */ _dynamic_tag(0);
const $for_content__$params = ($scope, $params2) => $for_content__item_content($scope, $params2[0]?.content);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<!><!><!>", "b%", 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);

// template.marko
const $item_content__if = /*@__PURE__*/ _if(1, "<button class=nested>nested</button>", " ", _script("a0", ($scope) => _on($scope.a, "click", function() {
	$out($scope._._, `nested ${$scope._.c}`);
})));
const $item_content__show = /*@__PURE__*/ _closure_get(6, ($scope) => $item_content__if($scope, $scope._.e ? 0 : 1));
const $item_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$out($scope._, $scope.c);
}));
const $item_content__setup = ($scope) => {
	$item_content__show($scope);
	$item_content__setup__script($scope);
};
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("a2", "<button class=direct>direct</button><!><!>", " b%", $item_content__setup), { 2($scope) {} });
const $out = /*@__PURE__*/ _let(3, ($scope) => _text($scope.b, $scope.d));
const $items = /*@__PURE__*/ _let(5, ($scope) => {
	let $item;
	forOf($scope.f, (item) => {
		$item = attrTags($item, { content: $item_content($scope, { 2: item }) });
	});
	$input_item($scope.c, $item);
});
const $setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$items($scope, $scope.f.map((it) => it + "!"));
}));
