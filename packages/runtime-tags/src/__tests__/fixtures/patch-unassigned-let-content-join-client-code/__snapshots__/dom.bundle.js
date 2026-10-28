// template.marko
const $wrap_content__input_name__OR__uid = /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope._.h + "-" + $scope._.g));
const $wrap_content__input_name = /*@__PURE__*/ _closure_get(9, $wrap_content__input_name__OR__uid, 0, "a0");
const $wrap_content__uid = /*@__PURE__*/ _closure_get(10, $wrap_content__input_name__OR__uid);
const $uid = _let(7, /* @__PURE__ */ _closure($wrap_content__uid));
const $n = /*@__PURE__*/ _let(8, ($scope) => _text($scope.c, $scope.i));
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.i + 1);
}));
const $input_name__closure = /*@__PURE__*/ _closure($wrap_content__input_name);
const $input_name = fill("a3", /*@__PURE__*/ _const(6, $input_name__closure));
