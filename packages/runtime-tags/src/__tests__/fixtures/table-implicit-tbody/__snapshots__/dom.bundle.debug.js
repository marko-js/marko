// template.marko
const $template = "<table><tbody><tr><th><!> rows</th></tr><!></tbody><tfoot><tr><td> </td></tr></tfoot></table><button>add</button>";
const $walks = "E E%m%lF o b";
const $for_content__row = ($scope, row) => _text($scope["#text/0"], row);
const $for_content__$params = ($scope, $params2) => $for_content__row($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/2", "<tr><td> </td></tr>", "E ", 0, $for_content__$params);
const $rows = /*@__PURE__*/ _let("rows/5", ($scope) => {
	_text($scope["#text/3"], $scope.rows.join("+"));
	$rows_length($scope, $scope.rows?.length);
	$for($scope, [$scope.rows]);
});
const $rows_length = /*@__PURE__*/ _const("rows_length", ($scope) => {
	_attr_class($scope["#tr/0"], `rows-${$scope.rows_length}`);
	_text($scope["#text/1"], $scope.rows_length);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/4"], "click", function() {
	$rows($scope, [...$scope.rows, "b"]);
}));
function $setup($scope) {
	$rows($scope, ["a"]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
