// template.marko
const $for_content__row = ($scope, row) => _text($scope.a, row);
const $for_content__$params = ($scope, $params2) => $for_content__row($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<tr><td> </td></tr>", "E ", 0, $for_content__$params);
const $rows = /*@__PURE__*/ _let(2, ($scope) => {
	$rows_length($scope, $scope.c?.length);
	$for($scope, [$scope.c]);
});
const $rows_length__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$rows($scope, $scope.d ? [] : ["c"]);
}));
const $rows_length = /*@__PURE__*/ _const(3, $rows_length__script);
