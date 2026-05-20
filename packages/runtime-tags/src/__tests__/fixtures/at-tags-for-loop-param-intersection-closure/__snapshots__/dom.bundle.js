// total: 3096 (min) 1583 (brotli)
// template.marko: 172 (min) 149 (brotli)
const $item_content__mult__OR__item = /* @__PURE__ */ _or(1, ($scope) => _text($scope.a, $scope.f * $scope._.d));
const $item_content__mult = /* @__PURE__ */ _closure_get(3, $item_content__mult__OR__item);
const $mult__closure = /* @__PURE__ */ _closure($item_content__mult);
const $mult__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$mult($scope, $scope.d + 1);
}));
const $mult = /* @__PURE__ */ _let(3, ($scope) => {
	_text($scope.c, $scope.d);
	$mult__closure($scope);
	$mult__script($scope);
});
