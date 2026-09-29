// template.marko
const $for_content__row = ($scope, row) => _text($scope.a, row);
const $for_content__$params = ($scope, $params2) => $for_content__row($scope, $params2[0]);
const $total = ($scope, total) => _text($scope.b, total);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<tr><td> </td></tr>", "E ", 0, $for_content__$params);
const $rows = /*@__PURE__*/ _let(3, ($scope) => {
	$total($scope, $scope.d.join("+"));
	$for($scope, [$scope.d]);
});
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$rows($scope, [...$scope.d, "b"]);
}));
