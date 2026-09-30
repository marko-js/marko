// template.marko
const $if_content2__count = _init_if_closure("a5", 1, 0, ($scope) => _text($scope.a, $scope._.c));
const $if_content__count = /*@__PURE__*/ _fill_let("a3", 2, $if_content2__count);
const $if_content__setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$if_content__count($scope, +$scope.c + 1);
}));
