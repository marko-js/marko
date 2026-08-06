// template.marko
const $for_content__input_title__OR__count__OR__item = /*@__PURE__*/ _fill_join_for("a0", 5, /*@__PURE__*/ _or(3, ($scope) => _text($scope.a, $scope._.f + " " + $scope.c + " #" + $scope._.g), 2), 0);
const $for_content__count = /*@__PURE__*/ _resume_init("a3", /*@__PURE__*/ _for_closure(0, $for_content__input_title__OR__count__OR__item));
const $count = /*@__PURE__*/ _let(6, $for_content__count);
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.g + 1);
}));
