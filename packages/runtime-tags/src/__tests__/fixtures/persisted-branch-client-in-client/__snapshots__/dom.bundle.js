// template.marko
const $if_content2__input_inner = /*@__PURE__*/ _fill_join("a1", 5, /*@__PURE__*/ _closure_get(9, ($scope) => _text($scope.a, $scope._._.f), ($scope) => $scope._._), _closure);
const $if_content2__setup = $if_content2__input_inner;
const $if_content__input_outer = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.e)));
const $if_content__setup = ($scope) => {
	$if_content__input_outer._($scope);
	$if_content__on._($scope);
};
const $if_content__if = /*@__PURE__*/ _if(1, "<p> </p>", "D ", $if_content2__setup);
const $if_content__on = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__if($scope, $scope._.h ? 0 : 1));
const $if = /*@__PURE__*/ _if(0, "<h2> </h2><!><!>", "D l%", $if_content__setup);
const $count = /*@__PURE__*/ _let(6, ($scope) => $if($scope, $scope.g > 1 ? 0 : 1));
const $on = /*@__PURE__*/ _let(7, $if_content__on);
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.g + 1);
	$on($scope, !$scope.h);
}));
