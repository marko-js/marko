// template.marko
const $if_content__info = _var_resume("a1", ($scope, info2) => $if_content__info2_name($scope, info2?.name));
const $if_content__info2_name = ($scope, info2_name) => _text($scope.c, info2_name);
const $n = /*@__PURE__*/ _let(11, ($scope) => _text($scope.b, $scope.l));
const $setup__script = _script("a4", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.l + 1);
}));
const $info = _var_resume("a0", ($scope, info) => $info_name($scope, info?.name));
const $info_name = ($scope, info_name) => _text($scope.e, info_name);
