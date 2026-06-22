// template.marko
const $template = "<table><tbody></tbody></table>";
const $walks = "D l";
const $for_content__selected__OR__row_id = /* @__PURE__ */ _or(6, ($scope) => _attr_class($scope["#tr/0"], ($scope._.selected?.id === $scope.row_id || $scope._.selected === $scope.row_id) && "danger"));
const $for_content__selected = /* @__PURE__ */ _for_closure("#tbody/0", $for_content__selected__OR__row_id);
const $for_content__setup = $for_content__selected;
const $for_content__row_id__script = _script("__tests__/template.marko_1_row_id", ($scope) => _on($scope["#button/1"], "click", function() {
	$selected($scope._, { id: $scope.row_id });
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
const $selected = /* @__PURE__ */ _let("selected/1", $for_content__selected);
const $for = /* @__PURE__ */ _for_of("#tbody/0", "<tr><td><button class=select> </button></td></tr>", " E D n", $for_content__setup, $for_content__$params);
const $rows = /* @__PURE__ */ _let("rows/2", ($scope) => $for($scope, [$scope.rows, "id"]));
function $setup($scope) {
	$selected($scope, { id: 1 });
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
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "D l", $setup);
