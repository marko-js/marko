// template.marko
const $d__OR__more__OR__obj__OR__k = /*@__PURE__*/ _or(9, ($scope) => _attr_class($scope.b, [
	"a",
	["b", "d" in $scope ? $scope.d : "dyn"],
	...$scope.e,
	...["n1", "d" in $scope ? $scope.d : "dyn"],
	{
		[$scope.i]: "d" in $scope ? $scope.d : "dyn",
		...$scope.h,
		"q": "d" in $scope ? $scope.d : "dyn"
	}
]), 3);
const $d__OR__moreStyles = /*@__PURE__*/ _or(6, ($scope) => _attr_style($scope.c, [
	"color:red",
	["margin:0", ("d" in $scope ? $scope.d : "dyn") && "padding:0"],
	...$scope.f
]));
const $d = /*@__PURE__*/ _let(3, ($scope) => {
	$d__OR__more__OR__obj__OR__k($scope);
	$d__OR__moreStyles($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$d($scope, ("d" in $scope ? $scope.d : "dyn") + "2");
}));
