// tags/child.marko
const $input_onPick__script = _script("b0", ($scope) => _on($scope.a, "click", $scope.f));
const $input_onPick = /*@__PURE__*/ _const(5, $input_onPick__script);

// template.marko
const $pick__OR__canPick = /*@__PURE__*/ _or(9, ($scope) => $input_onPick($scope.a, $scope.i() ? $scope.h : void 0));
const $pick2 = /*@__PURE__*/ _const(7, $pick__OR__canPick);
const $getHandler2 = ($scope, getHandler) => $input_onPick($scope.b, getHandler());
const $inc2 = /*@__PURE__*/ _const(10, ($scope) => $getHandler2($scope, $getHandler($scope)));
const $canPick2 = /*@__PURE__*/ _const(8, $pick__OR__canPick);
const $count__OR__max = /*@__PURE__*/ _or(6, ($scope) => $canPick2($scope, $canPick($scope)));
const $count = /*@__PURE__*/ _let(4, ($scope) => {
	_text($scope.d, $scope.e);
	$pick2($scope, $pick($scope));
	$inc2($scope, $inc($scope));
	$count__OR__max($scope);
});
const $max = /*@__PURE__*/ _let(5, $count__OR__max);
const $setup__script = _script("a4", ($scope) => _on($scope.c, "click", function() {
	$max($scope, $scope.f + 100);
}));
const $pick = ($scope) => function() {
	$count($scope, +$scope.e + 1);
};
const $getHandler = ($scope) => function() {
	return $scope.k;
};
const $inc = ($scope) => function() {
	$count($scope, $scope.e + 10);
};
const $canPick = ($scope) => function() {
	return $scope.e < $scope.f;
};
_resumed.a0 = $pick;
_resumed.a3 = $getHandler;
_resumed.a2 = $inc;
_resumed.a1 = $canPick;
