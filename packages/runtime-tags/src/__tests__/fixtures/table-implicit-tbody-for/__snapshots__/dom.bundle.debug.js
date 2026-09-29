// template.marko
const $template = "<table><tbody></tbody></table><button>toggle</button>";
const $walks = "D l b";
const $for_content__row = ($scope, row) => _text($scope["#text/0"], row);
const $for_content__$params = ($scope, $params2) => $for_content__row($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#tbody/0", "<tr><td> </td></tr>", "E ", 0, $for_content__$params);
const $rows = /*@__PURE__*/ _let("rows/2", ($scope) => {
	$rows_length($scope, $scope.rows?.length);
	$for($scope, [$scope.rows]);
});
const $rows_length__script = _script("__tests__/template.marko_0_rows_length#3", ($scope) => _on($scope["#button/1"], "click", function() {
	$rows($scope, $scope.rows_length ? [] : ["c"]);
}));
const $rows_length = /*@__PURE__*/ _const("rows_length", $rows_length__script);
function $setup($scope) {
	$rows($scope, ["a", "b"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
