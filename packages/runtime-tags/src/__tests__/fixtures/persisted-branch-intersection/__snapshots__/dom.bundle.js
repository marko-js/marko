// template.marko
const $if_content__input_title__OR__count = /*@__PURE__*/ _fill_join_if("a0", 5, /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope._.f + " #" + $scope._.g)), 0, 0);
const $if_content__count = /*@__PURE__*/ _resume_init("a3", /*@__PURE__*/ _if_closure(0, 0, $if_content__input_title__OR__count));
const $count = /*@__PURE__*/ _let(6, $if_content__count);
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.g + 1);
}));
