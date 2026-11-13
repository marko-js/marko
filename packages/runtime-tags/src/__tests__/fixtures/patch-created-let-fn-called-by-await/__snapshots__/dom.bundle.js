// template.marko
const $await_content__add__OR__value = /*@__PURE__*/ _or_patch("a7", 3, ($scope) => _text($scope.a, $scope._.d($scope.c)));
const $await_content__add = /*@__PURE__*/ _closure_get_patch("a0", 4, $await_content__add__OR__value);
const $if_content__add = /*@__PURE__*/ _const(3, /* @__PURE__ */ _closure($await_content__add));
const $if_content__n = /*@__PURE__*/ _fill_let("a5", 2, ($scope) => $if_content__add($scope, (v) => v + $scope.c));
const $if_content__setup__script = _script("a4", ($scope) => _on($scope.a, "click", function() {
	$if_content__n($scope, 5);
}));
