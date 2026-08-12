// template.marko
const $if_content__input_title = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.e)));
const $if_content__setup = $if_content__input_title;
const $if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content__setup);
const $count = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f > 1 ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
