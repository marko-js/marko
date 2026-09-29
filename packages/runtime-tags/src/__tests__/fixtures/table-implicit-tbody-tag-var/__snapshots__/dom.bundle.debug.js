// template.marko
const $template = "<table><tbody><tr><th>rows</th></tr></tbody><tbody></tbody><tfoot><tr><td> </td></tr></tfoot></table><button>add</button>";
const $walks = "Db bF o b";
const $for_content__row = ($scope, row) => _text($scope["#text/0"], row);
const $for_content__$params = ($scope, $params2) => $for_content__row($scope, $params2[0]);
const $total = ($scope, total) => _text($scope["#text/1"], total);
const $for = /*@__PURE__*/ _for_of_unkeyed("#tbody/0", "<tr><td> </td></tr>", "E ", 0, $for_content__$params);
const $rows = /*@__PURE__*/ _let("rows/3", ($scope) => {
	$total($scope, $scope.rows.join("+"));
	$for($scope, [$scope.rows]);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$rows($scope, [...$scope.rows, "b"]);
}));
function $setup($scope) {
	$rows($scope, ["a"]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
