// template.marko
const $clicks__script = _script("a0", ($scope) => _on($scope.a, "click", $scope.c < 3 && (() => $clicks($scope, $scope.c + 1) - 1)));
const $clicks = /* @__PURE__ */ _let(2, ($scope) => {
	_text($scope.b, $scope.c);
	$clicks__script($scope);
});
