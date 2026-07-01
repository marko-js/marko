// template.marko
const $template = "<button class=add>add</button><ul></ul>";
const $walks = " b b";
const $for_content__selected__OR__row_id = /* @__PURE__ */ _or(5, ($scope) => _attr_class($scope["#li/0"], $scope._.selected === $scope.row_id && "danger"));
const $for_content__selected = /* @__PURE__ */ _for_selector("#ul/1", "selected", "row_id", $for_content__selected__OR__row_id);
const $for_content__setup = $for_content__selected;
const $for_content__row_id = /* @__PURE__ */ _const("row_id", $for_content__selected__OR__row_id);
const $for_content__row_label = ($scope, row_label) => _text($scope["#text/1"], row_label);
const $for_content__$params = ($scope, $params2) => {
	$for_content__row_id($scope, $params2[0]?.id);
	$for_content__row_label($scope, $params2[0]?.label);
};
const $for = /* @__PURE__ */ _for_of("#ul/1", "<li> </li>", " D l", $for_content__setup, $for_content__$params);
const $rows__OR__nextId__script = _script("__tests__/template.marko_0_rows_nextId", ($scope) => _on($scope["#button/0"], "click", function() {
	$rows($scope, [{
		id: $scope.nextId,
		label: "new"
	}, ...$scope.rows]);
	$selected($scope, $scope.nextId);
	$nextId($scope, $scope.nextId + 1);
}));
const $rows__OR__nextId = /* @__PURE__ */ _or(5, $rows__OR__nextId__script);
const $rows = /* @__PURE__ */ _let("rows/2", ($scope) => {
	$for($scope, [$scope.rows, "id"]);
	$rows__OR__nextId($scope);
});
const $selected = /* @__PURE__ */ _let("selected/3", $for_content__selected);
const $nextId = /* @__PURE__ */ _let("nextId/4", $rows__OR__nextId);
function $setup($scope) {
	$rows($scope, [{
		id: 1,
		label: "a"
	}, {
		id: 2,
		label: "b"
	}]);
	$selected($scope, 1);
	$nextId($scope, 3);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
