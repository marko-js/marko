// template.marko
const $wrapper_content__count__OR__label = /*@__PURE__*/ _shell_or("a7", 2, ($scope) => _text($scope.a, $scope.b + $scope._.f));
const $wrapper_content__label = /*@__PURE__*/ _const(1, $wrapper_content__count__OR__label);
const $wrapper_content__input_label = _closure_resume("a5", /*@__PURE__*/ _fill_join_closure("a2", 4, /*@__PURE__*/ _closure_get(6, ($scope) => $wrapper_content__label($scope, $scope._.e)), 0));
const $wrapper_content__count = /*@__PURE__*/ _shell_init("a6", /*@__PURE__*/ _closure_get(7, $wrapper_content__count__OR__label));
const $count = /*@__PURE__*/ _fill_let("a3", 5, /* @__PURE__ */ _closure($wrapper_content__count));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
