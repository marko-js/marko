// template.marko
const $for_content__l = /*@__PURE__*/ _for_closure(0, ($scope) => _text($scope.a, $scope._.c[$scope.M].name), 6);
const $for_content__setup = $for_content__l;
const $wrapper_content__l = /*@__PURE__*/ _let(2, ($scope) => {
	$wrapper_content__l_length($scope, $scope.c?.length);
	$for_content__l($scope);
});
const $wrapper_content__for = /*@__PURE__*/ _for_to_unkeyed(0, "<span> </span>", "D ", $for_content__setup);
const $wrapper_content__l_length__OR__short = /*@__PURE__*/ _or(5, ($scope) => $wrapper_content__for($scope, [$scope.e ? 0 : $scope.d - 1]));
const $wrapper_content__l_length = /*@__PURE__*/ _const(3, $wrapper_content__l_length__OR__short);
const $wrapper_content__short = /*@__PURE__*/ _let(4, $wrapper_content__l_length__OR__short);
const $wrapper_content__setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$wrapper_content__short($scope, true);
	$wrapper_content__l($scope, [{ name: "z" }]);
}));
