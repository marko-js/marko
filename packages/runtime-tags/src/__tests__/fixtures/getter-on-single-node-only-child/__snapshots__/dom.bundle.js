// total: 6840 (min) 3172 (brotli)
// template.marko: 254 (min) 180 (brotli)
const $for_content__item = ($scope, item) => _text($scope.a, item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $ul_getter = _el("a0", 1);
const $for = /* @__PURE__ */ _for_of(1, "<li> </li>", "D l", 0, $for_content__$params);
const $items__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$items($scope, [...$scope.c, $scope.c?.length]);
}));
const $items = /* @__PURE__ */ _let(2, ($scope) => {
	$for($scope, [$scope.c]);
	$items__script($scope);
});
const $setup__script = _script("a1", ($scope) => {
	$ul_getter($scope)().classList.add("attached");
});
