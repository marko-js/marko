// tags/wrap.marko
const $if_content__input_title = /*@__PURE__*/ _shell_init("b2", /*@__PURE__*/ _fill_join_closure("b4", 3, /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.a, $scope._._.d), ($scope) => $scope._._, "b3"), 0));
const $Panel_content__if = /*@__PURE__*/ _if(0, "<em> </em>", "D ", $if_content__input_title);
const $Panel_content__open = ($scope, open) => $Panel_content__if($scope, open ? 0 : 1);
const $input_open = ($scope, input_open) => $Panel_content__open($scope.a, input_open);

// template.marko
const $count = /*@__PURE__*/ _fill_let("a1", 5, ($scope) => $input_open($scope.a, $scope.f % 2 === 0));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
