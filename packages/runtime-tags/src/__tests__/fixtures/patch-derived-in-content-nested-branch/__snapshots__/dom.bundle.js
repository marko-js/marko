// template.marko
const $if_content2__label = /*@__PURE__*/ _fill_join_closure("a0", 1, /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._._.b), ($scope) => $scope._._, "a2"), 0);
const $if_content__if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content2__label);
const $if_content__count__OR__label = /*@__PURE__*/ _fill_join_if("a0", 1, /*@__PURE__*/ _or_resume("a10", 1, ($scope) => $if_content__if($scope, $scope._._.f > 0 && $scope._.b ? 0 : 1)), 0, 0);
const $if_content__count = /*@__PURE__*/ _init_resume("a9", /*@__PURE__*/ _closure_get(7, $if_content__count__OR__label, ($scope) => $scope._._, "a3"));
const $count = /*@__PURE__*/ _let(5, /* @__PURE__ */ _closure($if_content__count));
const $setup__script = _script("a7", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
