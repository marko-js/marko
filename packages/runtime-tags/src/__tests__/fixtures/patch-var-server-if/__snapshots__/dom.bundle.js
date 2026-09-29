// template.marko
const $if_content__count = /*@__PURE__*/ _init_if_closure("a4", 2, 0, ($scope) => _text($scope.a, $scope._.h));
const $if_content__setup = $if_content__count;
const $count = /*@__PURE__*/ _let(7, $if_content__count);
const $setup__script = _script("a2", ($scope) => _on($scope.d, "click", function() {
	$count($scope, +$scope.h + 1);
}));
const $if = /*@__PURE__*/ _if(2, "<p>big <!></p>", "Db%", $if_content__setup);
const $double = _var_resume("a1", ($scope, double) => $if($scope, double > 4 ? 0 : 1));
