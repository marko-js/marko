// tags/btn.marko
const $getHandler__script = _script("b0", ($scope) => _on($scope.a, "click", $scope.f()));
const $getHandler$1 = /*@__PURE__*/ _const(5, $getHandler__script);

// template.marko
const $LocalBtn_content__getHandler = /*@__PURE__*/ _const(4, _script("a3", ($scope) => _on($scope.a, "click", $scope.e())));
const $mode = /*@__PURE__*/ _let(4, ($scope) => {
	$getHandler$1($scope.a, $getHandler($scope));
	$LocalBtn_content__getHandler($scope.b, $getHandler2($scope));
});
const $out = /*@__PURE__*/ _let(5, ($scope) => _text($scope.d, $scope.f));
const $setup__script = _script("a4", ($scope) => _on($scope.c, "click", function() {
	$mode($scope, "b");
}));
const $getHandler2 = ($scope) => function() {
	return $scope.e === "a" ? () => {
		$out($scope, "a");
	} : () => {
		$out($scope, "b");
	};
};
const $getHandler = ($scope) => function() {
	return $scope.e === "a" ? () => {
		$out($scope, "A");
	} : () => {
		$out($scope, "B");
	};
};
_resumed.a1 = $getHandler2;
_resumed.a0 = $getHandler;
