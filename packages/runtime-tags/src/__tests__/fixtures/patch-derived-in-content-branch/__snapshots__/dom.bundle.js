// template.marko
const $if_content__label = /*@__PURE__*/ _fill("a0", 1, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.b)));
const $wrapper_content__if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content__label);
const $wrapper_content__count__OR__label = /*@__PURE__*/ _fill("a0", 1, /*@__PURE__*/ _or(2, ($scope) => $wrapper_content__if($scope, $scope._.f > 0 && $scope.b ? 0 : 1)));
const $wrapper_content__count = /*@__PURE__*/ _closure_get(7, $wrapper_content__count__OR__label, 0, "a3");
const $count = _let(5, /* @__PURE__ */ _closure($wrapper_content__count));
const $setup__script = _script("a5", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
