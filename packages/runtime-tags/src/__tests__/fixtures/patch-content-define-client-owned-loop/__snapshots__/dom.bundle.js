// template.marko
const $for_content__input_suffix = _closure_resume("a2", /*@__PURE__*/ _fill_join_closure("a4", 5, /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.b, $scope._._.f), ($scope) => $scope._._), 0));
const $for_content__setup = $for_content__input_suffix;
const $for_content__item = ($scope, item) => _text($scope.a, item);
const $for_content__$params = ($scope, $params3) => $for_content__item($scope, $params3[0]);
const $List_content__for = /*@__PURE__*/ _for_of_unkeyed(0, "<li><!><!></li>", "D%b%", $for_content__setup, $for_content__$params);
const $List_content__items = ($scope, items) => $List_content__for($scope, [items]);
const $count = /*@__PURE__*/ _fill_let("a5", 7, ($scope) => $List_content__items($scope.a, $scope.h % 2 ? ["a"] : ["a", "b"]));
const $setup__script = _script("a3", ($scope) => _on($scope.c, "click", function() {
	$count($scope, +$scope.h + 1);
}));
