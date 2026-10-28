// template.marko
const $Row_content__uid__OR__n = /*@__PURE__*/ _fill_join("a1", 3, /*@__PURE__*/ _or(4, ($scope) => _text($scope.a, $scope._.h + "-" + $scope.d)));
const $Row_content__uid = /*@__PURE__*/ _closure_get(9, $Row_content__uid__OR__n);
const $uid = fill("a3", /*@__PURE__*/ _let(7, /* @__PURE__ */ _closure($Row_content__uid)));
const $n = /*@__PURE__*/ _let(8, ($scope) => _text($scope.c, $scope.i));
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.i + 1);
}));
