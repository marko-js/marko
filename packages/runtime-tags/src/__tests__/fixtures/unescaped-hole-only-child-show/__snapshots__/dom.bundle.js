// template.marko
const $if_content__show = /*@__PURE__*/ _show(2, 0);
const $if_content__open = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__show($scope, $scope._.f));
const $open = /*@__PURE__*/ _let(5, $if_content__open);
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.f);
}));
