// template.marko
const $if_content2__input_label = /*@__PURE__*/ _fill_join("a10 a11", 7, /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.a, $scope._.h)));
const $if_content2__setup = $if_content2__input_label;
const $if2 = /*@__PURE__*/ _if(1, "<b> </b>", "D ", $if_content2__setup);
const $open = /*@__PURE__*/ _let(8, ($scope) => $if2($scope, $scope.i ? 0 : 1));
const $setup__script = _script("a8", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.i);
}));
