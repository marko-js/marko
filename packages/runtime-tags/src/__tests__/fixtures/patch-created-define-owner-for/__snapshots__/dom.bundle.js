// tags/card.marko
const $for_content__input_w = /*@__PURE__*/ _fill_join_closure("b3", 5, /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.b, $scope._._.f), ($scope) => $scope._._, "b0"), 0);
const $for_content__setup = $for_content__input_w;
const $for_content__x = ($scope, x) => _text($scope.a, x);
const $for_content__$params = ($scope, $params3) => $for_content__x($scope, $params3[0]);
const $List_content__for = /*@__PURE__*/ _for_of_unkeyed(0, "<li><!> <!></li>", "D%c%", $for_content__setup, $for_content__$params);
const $List_content__items = ($scope, items) => $List_content__for($scope, [items]);
const $k = /*@__PURE__*/ _fill_let("b4", 6, ($scope) => $List_content__items($scope.a, $scope.g));
const $setup__script = _script("b2", ($scope) => _on($scope.b, "click", function() {
	$k($scope, []);
}));
