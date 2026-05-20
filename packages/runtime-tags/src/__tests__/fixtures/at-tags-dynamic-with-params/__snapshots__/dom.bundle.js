// total: 13055 (min) 5051 (brotli)
// tags/hello/index.marko: 0 (min) 1 (brotli)
const $dynamicTag = /* @__PURE__ */ _dynamic_tag(0, 0, 0, 1);
const $input_item = ($scope, input_item) => $dynamicTag($scope, input_item, () => [1]);

// template.marko: 215 (min) 157 (brotli)
const $item_content__y = ($scope, y) => _text($scope.a, y);
const $item_content__$params = ($scope, $params2) => $item_content__y($scope, $params2[0]);
const $item_content = /* @__PURE__ */ _content("a0", "y: <!>", "b%b", 0, $item_content__$params);
const $x__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$x($scope, !$scope.c);
}));
const $x = /* @__PURE__ */ _let(2, ($scope) => {
	let $item;
	if ($scope.c) $item = attrTag({ content: $item_content($scope) });
	$input_item($scope.a, $item);
	$x__script($scope);
});
