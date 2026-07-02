// template.marko
const $items__OR__index = /* @__PURE__ */ _or(6, ($scope) => _text($scope.b, $scope.d[$scope.f]));
const $items = /* @__PURE__ */ _let(3, ($scope) => {
	$items_($scope, $scope.d?.[0]);
	$items__OR__index($scope);
});
const $items_ = /* @__PURE__ */ _const(4, ($scope) => _text($scope.a, $scope.e));
const $index = /* @__PURE__ */ _let(5, $items__OR__index);
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	const newItems = $scope.d.slice(1);
	$items($scope, newItems);
	$index($scope, ($scope.f + 1) % newItems.length);
}));
