// template.marko
const $else_content__input_w = /*@__PURE__*/ _fill_closure("a4", 5, /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._._.f), ($scope) => $scope._._, "a1"), 1);
const $else_content__setup = $else_content__input_w;
const $if_content2__input_w = /*@__PURE__*/ _fill_closure("a4", 5, /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._._.f), ($scope) => $scope._._, "a0"), 0);
const $if_content__if = /*@__PURE__*/ _if(0, "<p>A <!></p>", "Db%", $if_content2__input_w, "<p>B <!></p>", "Db%", $else_content__setup);
const $if_content__x = /*@__PURE__*/ _let(1, ($scope) => $if_content__if($scope, $scope.b === "a" ? 0 : 1));
const $if_content__input_v = /*@__PURE__*/ _fill_signal("4 a3", /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__x($scope, $scope._.e)));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_v);
const $on = /*@__PURE__*/ _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$on($scope, !$scope.g);
}));
