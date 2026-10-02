// tags/press-button/index.marko
const $input_onPress__script = _script("b0", ($scope) => _on($scope.a, "click", $scope.d));

// template.marko
const $count = /*@__PURE__*/ _let(6);
const $log = /*@__PURE__*/ _let(7, ($scope) => _text($scope.c, $scope.h));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.g + 1);
}));
const $onPress = ($scope) => function() {
	$log($scope._, `${$scope._.h}[${$scope._.g}]`);
};
_resumed.a0 = $onPress;
