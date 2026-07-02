// template.marko
const $template = "<table><tbody></tbody></table><button class=remove>remove selected</button><button class=rotate>rotate</button><button class=clear>clear</button>";
const $walks = "D l b b b";
const $for_content__selected__OR__row_id = /* @__PURE__ */ _or(6, ($scope) => _attr_class($scope["#tr/0"], $scope._.selected === $scope.row_id && "danger"));
const $for_content__selected = /* @__PURE__ */ _for_selector("#tbody/0", "selected", "row_id", $for_content__selected__OR__row_id);
const $for_content__setup = $for_content__selected;
const $for_content__row_id__script = _script("__tests__/template.marko_1_row_id", ($scope) => _on($scope["#button/1"], "click", function() {
	$selected($scope._, $scope.row_id);
}));
const $for_content__row_id = /* @__PURE__ */ _const("row_id", ($scope) => {
	$for_content__selected__OR__row_id($scope);
	$for_content__row_id__script($scope);
});
const $for_content__row_label = ($scope, row_label) => _text($scope["#text/2"], row_label);
const $for_content__$params = ($scope, $params2) => {
	$for_content__row_id($scope, $params2[0]?.id);
	$for_content__row_label($scope, $params2[0]?.label);
};
const $selected = /* @__PURE__ */ _let("selected/4", $for_content__selected);
const $for = /* @__PURE__ */ _for_of("#tbody/0", "<tr><td><button class=select> </button></td></tr>", " E D n", $for_content__setup, $for_content__$params);
const $rows = /* @__PURE__ */ _let("rows/5", ($scope) => $for($scope, [$scope.rows, "id"]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$rows($scope, $scope.rows.filter((row) => row.id !== $scope.selected));
	});
	_on($scope["#button/2"], "click", function() {
		$rows($scope, [...$scope.rows.slice(1), $scope.rows?.[0]]);
	});
	_on($scope["#button/3"], "click", function() {
		$selected($scope, undefined);
	});
});
function $setup($scope) {
	$selected($scope, undefined);
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
		}
	]);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
