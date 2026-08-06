// template.marko
const $if_content__doubled = ($scope, doubled) => _text($scope.b, doubled);
const $if_content__count = /*@__PURE__*/ _resume("a3", /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__doubled($scope, $scope._.g * 2)));
const $count = /*@__PURE__*/ _let(6, $if_content__count);
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.g + 1);
}));
