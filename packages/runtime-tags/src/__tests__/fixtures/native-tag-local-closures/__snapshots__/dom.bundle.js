// total: 14273 (min) 5551 (brotli)
// template.marko: 390 (min) 236 (brotli)
const $item_content = /* @__PURE__ */ _content_closures(_content_resume("a2", " ", " b"), { 4($scope) {
	_text($scope.a, $scope.e);
} });
const $for_content__item__script = _script("a0", ($scope) => _attrs_script($scope, "a"));
const $for_content__item = /* @__PURE__ */ _const(2, ($scope) => {
	_attrs_content($scope, "a", $scope.c);
	$for_content__item__script($scope);
});
const $for_content__$params = ($scope, $params3) => $for_content__item($scope, $params3[0]);
const $Child_content__for = /* @__PURE__ */ _for_of(0, "<div></div>", " b", 0, $for_content__$params);
const $Child_content__input_item = ($scope, input_item) => $Child_content__for($scope, [input_item]);
const $size__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$size($scope, $scope.c + 1);
}));
const $size = /* @__PURE__ */ _let(2, ($scope) => {
	let $item;
	forUntil($scope.c, 0, 1, (i) => {
		$item = attrTags($item, { content: $item_content($scope, { 4: i }) });
	});
	$Child_content__input_item($scope.a, $item);
	$size__script($scope);
});
