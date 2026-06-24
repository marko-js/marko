// template.marko
const $Wrap_content__a = ($scope, a) => _text($scope.a, a);
const $Wrap_content__$a = ($scope, $a) => $Wrap_content__a($scope, void 0 !== $a ? $a : 1);
const $Wrap_content__b = ($scope, b) => _text($scope.b, b);
const $Wrap_content__tag_param_ = ($scope, $temp) => {
	$Wrap_content__$a($scope, $temp[0]);
	$Wrap_content__b($scope, $temp[1]);
};
const $n__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.d + 1);
}));
const $n = /*@__PURE__*/ _let(3, ($scope) => {
	$Wrap_content__tag_param_($scope.b, [void 0, $scope.d]);
	$Wrap_content__tag_param_($scope.c, [$scope.d, 10]);
	$n__script($scope);
});
