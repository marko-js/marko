// tags/panel/index.marko
const $if_content2__input_title = /*@__PURE__*/ _fill_join_closure("b5", 5, /*@__PURE__*/ _shell_subscribe_closure_get("b2", 7, ($scope) => _text($scope.a, $scope._._.f), ($scope) => $scope._._, "b3"), 0);
const $if_content__if = /*@__PURE__*/ _if(0, "<em> </em>", "D ", $if_content2__input_title);
const $if_content__input_inner = /*@__PURE__*/ _fill_join("b4", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__if($scope, $scope._.e ? 0 : 1)));
const $if = /*@__PURE__*/ _if(0, "<section></section>", " ", $if_content__input_inner);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);

// template.marko
const $count = /*@__PURE__*/ _fill_let("a1", 6, ($scope) => $input_show($scope.a, $scope.g % 2 === 0));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
