// template.marko
const $if_content__value = /*@__PURE__*/ _fill_join("a1", 3, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.d)));
const $Show_content__if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content__value);
const $Show_content__count__OR__label = /*@__PURE__*/ _fill_join("a1", 3, /*@__PURE__*/ _or(4, ($scope) => $Show_content__if($scope, $scope._.f > 0 && $scope.d ? 0 : 1)));
const $Show_content__count = /*@__PURE__*/ _closure_get(6, $Show_content__count__OR__label, 0, "a2");
const $count = /*@__PURE__*/ _fill_let("a4", 5, /* @__PURE__ */ _closure($Show_content__count));
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
