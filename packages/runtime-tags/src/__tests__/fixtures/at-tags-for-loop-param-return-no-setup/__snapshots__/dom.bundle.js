// tags/list.marko
_dynamic_tag_var_resume(0);
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0, 0, ($_) => $for_content__value);
const $for_content__value = _var_resume("b0", ($scope, value) => _text($scope.c, value));
const $for_content__item_content = $for_content__dynamicTag;
const $for_content__$params = ($scope, $params2) => $for_content__item_content($scope, $params2[0]?.content);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<!><!><span> </span>", "b1bD ", 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);

// template.marko
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("a0"), { 0: ($scope) => _return($scope, $scope.a * 10) });
const $count = /*@__PURE__*/ _let(2, ($scope) => {
	let $item;
	forUntil($scope.c, 0, 1, (n) => {
		$item = attrTags($item, { content: $item_content($scope, { 0: n }) });
	});
	$input_item($scope.b, $item);
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.c + 1);
}));
