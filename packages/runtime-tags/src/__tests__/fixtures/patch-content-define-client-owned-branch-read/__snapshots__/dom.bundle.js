// template.marko
const $if_content__input_title = /*@__PURE__*/ _fill_join_closure("a5", 4, _shell_subscribe_closure_get("a2", 6, ($scope) => _text($scope.a, $scope._._.e), ($scope) => $scope._._, "a3"), 0);
const $Panel_content__if = /*@__PURE__*/ _if(0, "<em> </em>", "D ", $if_content__input_title);
const $Panel_content__open = ($scope, open) => $Panel_content__if($scope, open ? 0 : 1);
const $count = /*@__PURE__*/ _fill_let("a6", 5, ($scope) => $Panel_content__open($scope.a, $scope.f % 2 === 0));
const $setup__script = _script("a4", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
