// template.marko
const $count__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.h + 1);
}));
const $count = /* @__PURE__ */ _let(7, ($scope) => {
	_text($scope.b, $scope.h);
	$count__script($scope);
});

// child.marko
const $count__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.f + 1);
}));
const $count = /* @__PURE__ */ _let(5, ($scope) => {
	_text($scope.b, $scope.f);
	$count__script($scope);
});
