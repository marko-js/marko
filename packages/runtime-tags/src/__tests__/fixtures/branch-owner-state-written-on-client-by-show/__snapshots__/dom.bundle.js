// template.marko
const $if_content__open = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.b, $scope._.f));
const $if_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$open($scope._, !$scope._.f);
}));
const $show = /*@__PURE__*/ _show(1);
const $open = /*@__PURE__*/ _let(5, ($scope) => {
	_attr_class($scope.a, `c${$scope.f}`);
	$show($scope, $scope.f);
	$if_content__open($scope);
});
