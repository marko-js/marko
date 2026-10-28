// template.marko
const $two_content__input_b = /*@__PURE__*/ _fill_closure("a5", 4, /*@__PURE__*/ _closure_get(9, ($scope) => _text($scope.a, $scope._.e), 0, "a3"), 1);
const $two_content = _content("a2", "<strong>two <!></strong>", "Db%", $two_content__input_b);
const $one_content__input_b = /*@__PURE__*/ _fill_closure("a5", 4, /*@__PURE__*/ _closure_get(9, ($scope) => _text($scope.a, $scope._.e), 0, "a1"), 0);
const $one_content = _content("a0", "<em>one <!></em>", "Db%", $one_content__input_b);
const $mode__OR__one__OR__two = /*@__PURE__*/ _or(8, ($scope) => _attr_content($scope, "b", $scope.f ? $scope.g : $scope.h), 2);
const $mode = /*@__PURE__*/ _let(5, $mode__OR__one__OR__two);
const $setup__script = _script("a4", ($scope) => _on($scope.a, "click", function() {
	$mode($scope, !$scope.f);
}));
