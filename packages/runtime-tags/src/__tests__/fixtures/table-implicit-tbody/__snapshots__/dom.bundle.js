// template.marko
const $for_content__row = ($scope, row) => _text($scope.a, row);
const $for_content__$params = ($scope, $params2) => $for_content__row($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed(2, "<tr><td> </td></tr>", "E ", 0, $for_content__$params);
const $rows = /*@__PURE__*/ _let(5, ($scope) => {
	_text($scope.d, $scope.f.join("+"));
	$rows_length($scope, $scope.f?.length);
	$for($scope, [$scope.f]);
});
const $rows_length = /*@__PURE__*/ _const(6, ($scope) => {
	_attr_class($scope.a, `rows-${$scope.g}`);
	_text($scope.b, $scope.g);
});
const $setup__script = _script("a0", ($scope) => _on($scope.e, "click", function() {
	$rows($scope, [...$scope.f, "b"]);
}));
