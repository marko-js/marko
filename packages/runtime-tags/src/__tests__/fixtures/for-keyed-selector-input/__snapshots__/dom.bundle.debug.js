// template.marko
const $template = "<button class=flip>flip</button><ul></ul>";
const $walks = " b b";
const $for_content__input_selected__OR__enabled__OR__row_id = /* @__PURE__ */ _or(5, ($scope) => _attr_class($scope["#li/0"], $scope._.enabled && $scope._.input_selected === $scope.row_id && "sel"), 2);
const $for_content__input_selected = /* @__PURE__ */ _for_selector("#ul/1", "input_selected", "row_id", $for_content__input_selected__OR__enabled__OR__row_id);
const $for_content__setup = ($scope) => {
	$for_content__input_selected._($scope);
	$for_content__enabled._($scope);
};
const $for_content__enabled = /* @__PURE__ */ _for_closure("#ul/1", $for_content__input_selected__OR__enabled__OR__row_id);
const $for_content__row_id = /* @__PURE__ */ _const("row_id", $for_content__input_selected__OR__enabled__OR__row_id);
const $for_content__row_label = ($scope, row_label) => _text($scope["#text/1"], row_label);
const $for_content__$params = ($scope, $params2) => {
	$for_content__row_id($scope, $params2[0]?.id);
	$for_content__row_label($scope, $params2[0]?.label);
};
const $enabled = /* @__PURE__ */ _let("enabled/6", $for_content__enabled);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$enabled($scope, !$scope.enabled);
}));
function $setup($scope) {
	$enabled($scope, true);
	$setup__script($scope);
}
const $for = /* @__PURE__ */ _for_of("#ul/1", "<li> </li>", " D l", $for_content__setup, $for_content__$params);
const $input_rows = ($scope, input_rows) => $for($scope, [input_rows, "id"]);
const $input = ($scope, input) => {
	$input_rows($scope, input.rows);
	$input_selected($scope, input.selected);
};
const $input_selected = /* @__PURE__ */ _const("input_selected", $for_content__input_selected);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);
