// template.marko
const $pattern2 = ($scope, $pattern) => {
	$value2($scope, $pattern[0].value);
	$valueChange2($scope, $pattern[0].valueChange);
};
const $count = /*@__PURE__*/ _let(2, ($scope) => $pattern2($scope, [{
	value: $scope.c,
	valueChange: $value($scope)
}]));
const $value2 = /*@__PURE__*/ _const(5, ($scope) => _text($scope.b, $scope.f));
const $valueChange2__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$scope.g(+$scope.f + 1);
}));
const $valueChange2 = /*@__PURE__*/ _const(6, $valueChange2__script);
const $value = ($scope) => function(v) {
	$count($scope, v);
};
_resumed.a0 = $value;
