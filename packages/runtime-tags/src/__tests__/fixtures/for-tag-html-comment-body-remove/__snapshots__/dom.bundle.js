// template.marko
const $for_content__x = /*@__PURE__*/ _const(2, ($scope) => _text($scope.a, $scope.c));
const $for_content__$params = ($scope, $params2) => $for_content__x($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<!---->", " ", 0, $for_content__$params);
const $list = /*@__PURE__*/ _let(2, ($scope) => $for($scope, [$scope.c]));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$list($scope, $scope.c.slice(1));
}));
