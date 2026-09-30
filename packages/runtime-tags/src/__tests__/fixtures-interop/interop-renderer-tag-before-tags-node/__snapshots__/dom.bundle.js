// template.marko
const $if_content__count = /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.c, $scope._.d));
const $if_content__setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope._, +$scope._.d + 1);
}));
const $if_content__setup = ($scope) => {
	$if_content__count._($scope);
	$if_content__setup__script($scope);
};
const $if = /*@__PURE__*/ _if(1, "<!><!><button id=inc> </button>", "b%b D ", $if_content__setup);
const $show = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $count = /*@__PURE__*/ _let(3, $if_content__count);
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.c);
}));
