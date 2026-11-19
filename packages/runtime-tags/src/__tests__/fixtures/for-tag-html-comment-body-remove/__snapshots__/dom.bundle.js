// template.marko
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<!---->", " ", 0, /* @__PURE__ */ _const(2, ($scope) => _text($scope.a, $scope.c)));
const $list = /*@__PURE__*/ _let(2, ($scope) => $for($scope, [$scope.c]));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$list($scope, $scope.c.slice(1));
}));
