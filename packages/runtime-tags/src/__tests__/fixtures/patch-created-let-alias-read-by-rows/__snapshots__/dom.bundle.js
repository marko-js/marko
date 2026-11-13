// template.marko
const $for_content__picked__OR__item = /*@__PURE__*/ _or_patch("a6", 5, ($scope) => _text($scope.b, $scope.e === $scope._.b ? "*" : ""));
const $for_content__sel = /*@__PURE__*/ _for_closure_patch("a5", 0, $for_content__picked__OR__item, 2);
const $for_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$if_content__sel($scope._, $scope.e);
}));
const $if_content__sel = /*@__PURE__*/ _fill_let("a3", 1, $for_content__sel);
