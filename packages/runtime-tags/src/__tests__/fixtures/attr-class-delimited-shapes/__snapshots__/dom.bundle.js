// template.marko
const $d__OR__more__OR__obj = /* @__PURE__ */ _or(8, ($scope) => _attr_class($scope.b, [
	"a",
	["b", $scope.d],
	...$scope.e,
	...["n1", $scope.d],
	{
		["computed"]: $scope.d,
		...$scope.h,
		"q": $scope.d
	}
]), 2);
const $d__OR__moreStyles = /* @__PURE__ */ _or(6, ($scope) => _attr_style($scope.c, [
	"color:red",
	["margin:0", $scope.d && "padding:0"],
	...$scope.f
]));
const $d__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$d($scope, $scope.d + "2");
}));
const $d = /* @__PURE__ */ _let(3, ($scope) => {
	$d__OR__more__OR__obj($scope);
	$d__OR__moreStyles($scope);
	$d__script($scope);
});
