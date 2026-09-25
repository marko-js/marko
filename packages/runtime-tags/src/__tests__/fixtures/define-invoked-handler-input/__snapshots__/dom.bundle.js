// template.marko
const $Picker_content__setup = /*@__PURE__*/ _child_setup(_script("a3", ($scope) => _on($scope.a, "click", function() {
	$scope.f();
})));
const $n = /*@__PURE__*/ _let(3, ($scope) => _text($scope.c, $scope.d));
const $inc = ($scope) => function() {
	$n($scope, +$scope.d + 1);
};
const $onPick = ($scope) => function() {
	$n($scope, $scope.d + 10);
};
_resumed.a0 = $inc;
_resumed.a1 = $onPick;
