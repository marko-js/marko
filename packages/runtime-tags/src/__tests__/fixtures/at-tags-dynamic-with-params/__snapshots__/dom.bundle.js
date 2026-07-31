// tags/hello/index.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0, 0, 0, 1);
const $input_item = ($scope, input_item) => $dynamicTag($scope, input_item, () => [1]);

// template.marko
const $item_content__y = ($scope, y) => _text($scope, "a", y);
const $item_content__$params = ($scope, $params2) => $item_content__y($scope, $params2[0]);
const $item_content = /*@__PURE__*/ _content("a0", "y: <!>", "b%", 0, $item_content__$params);
const $x = /*@__PURE__*/ _let(3, ($scope) => {
	let $item;
	if ($scope.d) $item = attrTag({ content: $item_content($scope) });
	$input_item($scope.a, $item);
});
const $setup__script = _script("a2", ($scope) => _on($scope.c, "click", function() {
	$x($scope, !$scope.d);
}));
const $menuEl = _var_resume("a1", ($scope, menuEl) => {});
