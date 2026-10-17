// template.marko
const $if_content__input_title = /*@__PURE__*/ _fill_join_closure("a4", 4, /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.a, $scope._._.e), ($scope) => $scope._._, "a1"), 0);
const $Panel_content__if = /*@__PURE__*/ _if(0, "<em> </em>", "D ", $if_content__input_title);
const $Panel_content__open = ($scope, open) => $Panel_content__if($scope, open ? 0 : 1);
const $count = /*@__PURE__*/ _fill_let("a5", 5, ($scope) => $Panel_content__open($scope.a, $scope.f % 2 === 0));
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
