// template.marko
const $if_content__count = /*@__PURE__*/ _resume("a3", /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.a, $scope._.h)));
const $count = /*@__PURE__*/ _let(7, $if_content__count);
const $setup__script = _script("a1", ($scope) => _on($scope.c, "click", function() {
	$count($scope, $scope.h + 1);
}));
