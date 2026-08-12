// template.marko
const $if_content2__input_title__OR__count = /*@__PURE__*/ _fill_join_if("a0", 6, /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope._._.g + " #" + $scope._._.h)), 0, 0, 0, 0);
const $if_content2__count = /*@__PURE__*/ _closure_get(10, $if_content2__input_title__OR__count, ($scope) => $scope._._);
const $count = /*@__PURE__*/ _let(7, /* @__PURE__ */ _closure($if_content2__count));
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.h + 1);
}));
