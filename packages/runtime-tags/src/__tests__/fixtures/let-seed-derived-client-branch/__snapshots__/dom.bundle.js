// template.marko
const $if_content__input_w = /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.b, $scope._.f));
const $if_content__setup = ($scope) => {
	$if_content__input_w._($scope);
	$if_content__d._($scope);
};
const $if_content__x = /*@__PURE__*/ _let(2, ($scope) => _text($scope.a, $scope.c));
const $if_content__d = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__x($scope, $scope._.g));
const $if = /*@__PURE__*/ _if(1, "<p><!> <!></p>", "D%c%", $if_content__setup);
const $on = /*@__PURE__*/ _let(7, ($scope) => $if($scope, $scope.h ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$on($scope, !$scope.h);
}));
