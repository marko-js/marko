// tags/toggle-panel/index.marko
const $if_content__input_title = /*@__PURE__*/ _fill_join("b0", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.e)));
const $if = /*@__PURE__*/ _if(0, "<em> </em>", "D ", $if_content__input_title);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input_title$1 = /*@__PURE__*/ _fill_const("b0", 4, $if_content__input_title);

// template.marko
const $count = /*@__PURE__*/ _let(5, ($scope) => $input_show($scope.a, $scope.f % 2 === 0));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
const $input_title = _fill_const("a0", 4, ($scope) => $input_title$1($scope.a, $scope.e));
