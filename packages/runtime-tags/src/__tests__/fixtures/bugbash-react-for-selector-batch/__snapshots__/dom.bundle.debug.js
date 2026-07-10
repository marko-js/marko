// template.marko
const $template = "<ul id=list></ul><button id=sel2>sel2</button><button id=batch>batch</button><button id=swap>swap</button>";
const $walks = " b b b b";
const $for_content__selected__OR__row_id = /*@__PURE__*/ _or(5, ($scope) => _attr_class($scope["#li/0"], $scope._.selected === $scope.row_id && "sel"));
const $for_content__selected = /*@__PURE__*/ _for_selector("#ul/0", "selected", "row_id", $for_content__selected__OR__row_id);
const $for_content__setup = $for_content__selected;
const $for_content__row_id = /*@__PURE__*/ _const("row_id", $for_content__selected__OR__row_id);
const $for_content__row_label = ($scope, row_label) => _text($scope["#text/1"], row_label);
const $for_content__$params = ($scope, $params2) => {
	$for_content__row_id($scope, $params2[0]?.id);
	$for_content__row_label($scope, $params2[0]?.label);
};
const $selected = /*@__PURE__*/ _let("selected/4", $for_content__selected);
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li> </li>", " D l", $for_content__setup, $for_content__$params);
const $rows_3__OR__rows_2__OR__rows___script = _script("__tests__/template.marko_0_rows_3_rows_2_rows_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$rows($scope, [
		$scope.rows_3,
		$scope.rows_2,
		$scope.rows_0
	]);
	$selected($scope, 3);
}));
const $rows_3__OR__rows_2__OR__rows_ = $rows_3__OR__rows_2__OR__rows___script;
const $rows = /*@__PURE__*/ _let("rows/5", ($scope) => {
	$rows_($scope, $scope.rows?.[3]);
	$rows_2($scope, $scope.rows?.[2]);
	$rows_3($scope, $scope.rows?.[0]);
	$for($scope, [$scope.rows, "id"]);
	$rows_3__OR__rows_2__OR__rows_($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$selected($scope, 2);
	});
	_on($scope["#button/3"], "click", function() {
		$selected($scope, 4);
		$rows($scope, [...$scope.rows].reverse());
	});
});
function $setup($scope) {
	$selected($scope, 1);
	$rows($scope, [
		{
			id: 1,
			label: "a"
		},
		{
			id: 2,
			label: "b"
		},
		{
			id: 3,
			label: "c"
		},
		{
			id: 4,
			label: "d"
		}
	]);
	$setup__script($scope);
}
const $rows_ = /*@__PURE__*/ _const("rows_3");
const $rows_2 = /*@__PURE__*/ _const("rows_2");
const $rows_3 = /*@__PURE__*/ _const("rows_0");
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
