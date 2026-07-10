// template.marko
const $Wrap_content__a = ($scope, a) => _text($scope.a, a);
const $Wrap_content__$a = ($scope, $a = 1) => $Wrap_content__a($scope, $a);
const $Wrap_content__b = ($scope, b) => _text($scope.b, b);
const $Wrap_content__tag_param_ = ($scope, $temp) => {
	$Wrap_content__$a($scope, $temp[0]);
	$Wrap_content__b($scope, $temp[1]);
};
const $n = /*@__PURE__*/ _let(3, ($scope) => {
	$Wrap_content__tag_param_($scope.b, [void 0, $scope.d]);
	$Wrap_content__tag_param_($scope.c, [$scope.d, 10]);
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.d + 1);
}));
