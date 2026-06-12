// template.marko
const $shared__OR__count = /* @__PURE__ */ _or(6, _script("b1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.f + Object.keys($scope.e).length);
})));
const $count = /* @__PURE__ */ _let(5, ($scope) => {
	_text($scope.b, $scope.f);
	$shared__OR__count($scope);
});
function $report($scope) {
	return function(o) {
		return o === $scope.e;
	};
}
_resume("b0", $report);

// child.marko
const $input__OR__data = /* @__PURE__ */ _or(6, _script("a0", ($scope) => _on($scope.a, "click", function() {
	$verified($scope, String($scope.d.report($scope.f)));
})));
const $verified = /* @__PURE__ */ _let(7, ($scope) => _text($scope.b, $scope.h));
