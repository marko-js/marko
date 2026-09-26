// template.marko
const $for_content2__x = ($scope, x) => _text($scope.a, x);
const $for_content2__$params = ($scope, $params3) => $for_content2__x($scope, $params3[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, " ", " ", /* @__PURE__ */ _for_closure(0, ($scope) => _text($scope.a, $scope._.e)));
const $for2 = /*@__PURE__*/ _for_of_unkeyed(1, " ", " ", 0, $for_content2__$params);
const $list = /*@__PURE__*/ _let(3, ($scope) => {
	$for($scope, [$scope.d]);
	$for2($scope, [$scope.d]);
});
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$list($scope, $scope.d.slice(1));
}));
