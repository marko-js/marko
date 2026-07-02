// template.marko
const $for_content__item_a__OR__item_b = /* @__PURE__ */ _or(5, ($scope) => _text($scope.a, $scope.d + $scope.e));
const $for_content__item_a = /* @__PURE__ */ _const(3, $for_content__item_a__OR__item_b);
const $for_content__item_b = /* @__PURE__ */ _const(4, $for_content__item_a__OR__item_b);
const $for_content__$params = ($scope, $params2) => {
	$for_content__item_a($scope, $params2[0]?.a);
	$for_content__item_b($scope, $params2[0]?.b);
};
const $for = /* @__PURE__ */ _for_of(0, "<li> </li>", "D l", 0, $for_content__$params);
const $list = /* @__PURE__ */ _let(2, ($scope) => $for($scope, [$scope.c]));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$list($scope, [...$scope.c].reverse());
}));
