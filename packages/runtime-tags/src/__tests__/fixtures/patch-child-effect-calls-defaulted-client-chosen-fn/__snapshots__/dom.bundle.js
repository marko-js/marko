// tags/label-view.marko
const $fmt2__script = _script("b1", ($scope) => {
	$scope.a.textContent = $scope.e();
	console.log("run", $scope.e());
});
const $fmt2 = /*@__PURE__*/ _const(4, $fmt2__script);
const $input_fmt = ($scope, input_fmt) => $fmt2($scope, input_fmt ?? $fmt);
function $fmt() {
	return "none";
}
_resumed.b0 = $fmt;

// template.marko
const $upper__OR__up__OR__low = /*@__PURE__*/ _or_resume("a3", 8, ($scope) => $input_fmt($scope.a, $scope.f ? $scope.g : $scope.h), 2);
const $upper = _let(5, $upper__OR__up__OR__low);
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$upper($scope, !$scope.f);
}));
const $up = ($scope) => () => "U" + $scope.e;
const $low = ($scope) => () => "l" + $scope.e;
_bind_resume("a0 e", $up);
_bind_resume("a1 e", $low);
