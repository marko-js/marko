// template.marko
const $if_content__n = /*@__PURE__*/ _closure_get(2, ($scope) => _text($scope.c, $scope._._.b), ($scope) => $scope._._, "a1");
const $if_content__setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$n($scope._._, +$scope._._.b + 1);
}));
const $if_content__setup = ($scope) => {
	$if_content__n($scope);
	$if_content__k._($scope);
	$if_content__setup__script($scope);
};
const $if_content__k = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.e));
const $D_content__if = /*@__PURE__*/ _if(0, "<span> </span><button> </button>", "D l D ", $if_content__setup);
const $D_content__on = ($scope, on) => $D_content__if($scope, on ? 0 : 1);
const $n__closure = /*@__PURE__*/ _closure($if_content__n);
const $n = _let(1, ($scope) => {
	$D_content__on($scope.a, $scope.b + 1);
	$n__closure($scope);
});
