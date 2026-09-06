// template.marko
const $for_content__input_note__OR__count__OR__item = /*@__PURE__*/ _fill_join_for("a0", 5, /*@__PURE__*/ _or(3, ($scope) => _text($scope.a, $scope._.f + $scope.c + $scope._.h), 2), 0);
const $for_content__input_note = /*@__PURE__*/ _for_closure(0, $for_content__input_note__OR__count__OR__item);
const $for_content__setup = ($scope) => {
	$for_content__input_note._($scope);
	$for_content__count._($scope);
};
const $for_content__count = /*@__PURE__*/ _for_closure(0, $for_content__input_note__OR__count__OR__item);
const $for_content__item = /*@__PURE__*/ _const(2, $for_content__input_note__OR__count__OR__item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of(0, "<li> </li>", "D ", $for_content__setup, $for_content__$params);
const $items = /*@__PURE__*/ _let(6, ($scope) => $for($scope, [$scope.g]));
const $count = /*@__PURE__*/ _let(7, $for_content__count);
const $setup__script = _script("a0", ($scope) => {
	_on($scope.b, "click", function() {
		$items($scope, [...$scope.g, "b"]);
	});
	_on($scope.c, "click", function() {
		$count($scope, $scope.h + 1);
	});
});
