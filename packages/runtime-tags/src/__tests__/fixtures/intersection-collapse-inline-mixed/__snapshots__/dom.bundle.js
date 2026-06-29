// template.marko
const $shared = /* @__PURE__ */ _const(4, ($scope) => _text($scope.b, $scope.e));
const $shared__OR__once = ($scope) => {
	_text($scope.c, $scope.e + $scope.d * 3);
};
const $count__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
const $count = /* @__PURE__ */ _let(3, ($scope) => {
	$shared($scope, $scope.d * 2);
	$shared__OR__once($scope);
	$count__script($scope);
});
