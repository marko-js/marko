// template.marko
const $if_content__info = _var_resume("a1", ($scope, info2) => _text($scope.c, info2?.name));
const $n = _let(11, ($scope) => _text($scope.b, $scope.l));
const $setup__script = _script("a4", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.l + 1);
}));
const $info = _var_resume("a0", ($scope, info) => _text($scope.e, info?.name));
