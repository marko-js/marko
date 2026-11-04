// template.marko
const $if_content__v = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.f));
const $v = /*@__PURE__*/ _let(5, $if_content__v);
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$v($scope, $scope.f + "!");
}));
