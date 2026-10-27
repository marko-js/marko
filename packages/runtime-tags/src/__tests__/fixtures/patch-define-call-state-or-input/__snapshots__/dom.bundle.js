// template.marko
const $if_content__label = /*@__PURE__*/ _fill_join("a1", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.e)));
const $Panel_content__if = /*@__PURE__*/ _if(0, "<em> </em>", "D ", $if_content__label);
const $Panel_content__isOpen = ($scope, isOpen) => $Panel_content__if($scope, isOpen ? 0 : 1);
const $input_show__OR__open = /*@__PURE__*/ _fill_join("a3", 4, /*@__PURE__*/ _or(7, ($scope) => $Panel_content__isOpen($scope.a, $scope.g || $scope.e)));
const $open = /*@__PURE__*/ _let(6, $input_show__OR__open);
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.g);
}));
