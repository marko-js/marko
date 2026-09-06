// template.marko
const $if_content__input_title = /*@__PURE__*/ _fill_join("a0", 5, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.f)));
const $if_content__setup = $if_content__input_title;
const $if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content__setup);
const $show = /*@__PURE__*/ _let(7, ($scope) => $if($scope, $scope.h ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$show($scope, !$scope.h);
}));
