// total: 6943 (min) 3208 (brotli)
// template.marko: 284 (min) 187 (brotli)
const $for_content__item = ($scope, item) => _text($scope.a, item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $id__OR__items__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	const nextId = $scope.d + 1;
	$id($scope, nextId);
	$items($scope, [...$scope.e, nextId]);
}));
const $id__OR__items = /* @__PURE__ */ _or(5, $id__OR__items__script);
const $id = /* @__PURE__ */ _let(3, $id__OR__items);
const $for = /* @__PURE__ */ _for_of(0, " ", " b", 0, $for_content__$params);
const $items__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$items($scope, $scope.e.slice(0, -1));
}));
const $items = /* @__PURE__ */ _let(4, ($scope) => {
	$for($scope, [$scope.e]);
	$id__OR__items($scope);
	$items__script($scope);
});
