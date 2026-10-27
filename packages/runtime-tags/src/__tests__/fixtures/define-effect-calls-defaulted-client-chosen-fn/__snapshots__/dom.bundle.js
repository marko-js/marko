// template.marko
const $Show_content__g__script = _script("a4", ($scope) => {
	$scope.a.textContent = $scope.e();
	console.log("run", $scope.e());
});
const $Show_content__g = /*@__PURE__*/ _const(4, $Show_content__g__script);
const $Show_content__get = ($scope, get) => $Show_content__g($scope, get ?? $g);
const $upper__OR__up__OR__low = /*@__PURE__*/ _or(8, ($scope) => $Show_content__get($scope.a, $scope.f ? $scope.g : $scope.h), 2);
const $upper = /*@__PURE__*/ _let(5, $upper__OR__up__OR__low);
const $setup__script = _script("a5", ($scope) => _on($scope.b, "click", function() {
	$upper($scope, !$scope.f);
}));
function $g() {
	return "none";
}
const $up = ($scope) => () => "U" + $scope.e;
const $low = ($scope) => () => "l" + $scope.e;
_resumed.a2 = $g;
_resumed.a0 = $up;
_resumed.a1 = $low;
