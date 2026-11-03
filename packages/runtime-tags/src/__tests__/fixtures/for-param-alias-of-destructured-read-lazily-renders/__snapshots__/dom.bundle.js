// template.marko
const $for_content__b = ($scope) => _text($scope.a, $scope.e);
const $for_content__setup = _script("a0", ($scope) => _on($scope.b, "click", function() {
	console.log($scope.e);
}));
const $for_content__$params = ($scope, $params2) => $for_content__a($scope, $params2[0].a);
const $for_content__a = /*@__PURE__*/ _const(4, ($scope) => $for_content__b($scope, $scope.e));
const $for = /*@__PURE__*/ _for_of_unkeyed(1, "<div> </div><button class=log>log</button>", "D l ", $for_content__setup, $for_content__$params);
const $rows = /*@__PURE__*/ _let(2, ($scope) => $for($scope, [$scope.c]));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$rows($scope, [{ a: "bye" }, { a: "now" }]);
}));
