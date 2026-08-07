// template.marko
const $else_content__label = /*@__PURE__*/ _fill_join("a1", 8, /*@__PURE__*/ _if_closure(1, 1, ($scope) => _text($scope.a, $scope._.i)));
const $else_content__setup = $else_content__label;
const $if_content__input_yes = /*@__PURE__*/ _fill_join("a0", 6, /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.a, $scope._.g)));
const $if_content__setup = $if_content__input_yes;
const $if = /*@__PURE__*/ _if(1, "<b> </b>", "D ", $if_content__setup, "<i> </i>", "D ", $else_content__setup);
const $on = /*@__PURE__*/ _let(7, ($scope) => $if($scope, $scope.h ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$on($scope, !$scope.h);
}));
