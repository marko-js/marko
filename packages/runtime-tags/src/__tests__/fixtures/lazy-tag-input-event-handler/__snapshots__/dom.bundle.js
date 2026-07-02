// template.marko
const $count = /* @__PURE__ */ _let(5, ($scope) => _text($scope.b, $scope.f));
const $setup__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.f + Object.keys($scope.e).length);
}));
function $report($scope) {
	return function(o) {
		return o === $scope.e;
	};
}
_resume("b0", $report);

// child.marko
const $verified = /* @__PURE__ */ _let(6, ($scope) => _text($scope.b, $scope.g));
const $input__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$verified($scope, String($scope.d.report($scope.f)));
}));
