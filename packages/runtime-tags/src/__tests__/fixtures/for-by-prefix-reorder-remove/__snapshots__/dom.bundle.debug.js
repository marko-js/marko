// template.marko
const $template = "<ul></ul><button class=reorder>stable prefix, drop tail, swap</button><button class=front>reorder from front and shrink</button><button class=append>append</button>";
const $walks = " b b b b";
const $for_content__row_id = ($scope, row_id) => _text($scope["#text/0"], row_id);
const $for_content__$params = ($scope, $params2) => $for_content__row_id($scope, $params2[0]?.id);
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li> </li>", "D l", 0, $for_content__$params);
const $rows_0__OR__rows_1__OR__rows_3__OR__rows___script = _script("__tests__/template.marko_0_rows_0_rows_1_rows_3_rows_2", ($scope) => _on($scope["#button/1"], "click", function() {
	$rows($scope, [
		$scope.rows_0,
		$scope.rows_1,
		$scope.rows_3,
		$scope.rows_2
	]);
}));
const $rows_0__OR__rows_1__OR__rows_3__OR__rows_ = $rows_0__OR__rows_1__OR__rows_3__OR__rows___script;
const $rows_0__OR__rows___script = _script("__tests__/template.marko_0_rows_0_rows_1", ($scope) => _on($scope["#button/2"], "click", function() {
	$rows($scope, [$scope.rows_1, $scope.rows_0]);
}));
const $rows_0__OR__rows_ = $rows_0__OR__rows___script;
const $rows = /*@__PURE__*/ _let("rows/4", ($scope) => {
	$rows_($scope, $scope.rows?.[0]);
	$rows_2($scope, $scope.rows?.[1]);
	$rows_3($scope, $scope.rows?.[3]);
	$rows_4($scope, $scope.rows?.[2]);
	$for($scope, [$scope.rows, "id"]);
	$rows_0__OR__rows_1__OR__rows_3__OR__rows_($scope);
	$rows_0__OR__rows_($scope);
});
const $rows_ = /*@__PURE__*/ _const("rows_0");
const $rows_2 = /*@__PURE__*/ _const("rows_1");
const $rows_3 = /*@__PURE__*/ _const("rows_3");
const $rows_4 = /*@__PURE__*/ _const("rows_2");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$rows($scope, [...$scope.rows, { id: 9 }]);
}));
function $setup($scope) {
	$rows($scope, [
		{ id: 1 },
		{ id: 2 },
		{ id: 3 },
		{ id: 4 },
		{ id: 5 }
	]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
