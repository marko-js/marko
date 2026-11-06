// template.marko
const $for_content__l = /*@__PURE__*/ _for_closure(2, ($scope) => _text($scope.a, $scope._.h[$scope.M].name), 11, 1);
const $for_content__setup = $for_content__l;
const $l = /*@__PURE__*/ _let(7, ($scope) => {
	$l_length($scope, $scope.h?.length);
	$for_content__l($scope);
});
const $for = /*@__PURE__*/ _for_to_unkeyed(2, "<span> </span>", "D ", $for_content__setup);
const $l_length__OR__r = /*@__PURE__*/ _or(10, ($scope) => $for($scope, [$scope.j ? 0 : $scope.i - 1]), 1, 1);
const $l_length = /*@__PURE__*/ _const(8, $l_length__OR__r);
const $setup__script = _script("a1", ($scope) => _on($scope.d, "click", function() {
	$l($scope, [{ name: "z" }]);
}));
const $r = _var_resume("a0", /*@__PURE__*/ _const(9, $l_length__OR__r));
