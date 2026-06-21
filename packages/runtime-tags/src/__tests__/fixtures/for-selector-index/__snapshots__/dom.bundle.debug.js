// template.marko
const $template = "<table><tbody></tbody></table>";
const $walks = "D l";
const $for_content__selected = /* @__PURE__ */ _for_selector("#tbody/0", "selected", "#LoopKey", ($scope) => _attr_class($scope["#tr/0"], $scope["SelectorActive:#tbody/0"] && "danger"));
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$selected($scope._, $scope["#LoopKey"]);
}));
const $for_content__setup = ($scope) => {
	$for_content__selected._($scope);
	$for_content__setup__script($scope);
};
const $for_content__label = ($scope, label) => _text($scope["#text/2"], label);
const $for_content__$params = ($scope, $params2) => $for_content__label($scope, $params2[0]);
const $selected = /* @__PURE__ */ _let("selected/1", $for_content__selected);
const $for = /* @__PURE__ */ _for_of_selector("#tbody/0", "<tr><td><button class=select> </button></td></tr>", " E D n", $for_content__setup, $for_content__$params);
const $rows = /* @__PURE__ */ _let("rows/2", ($scope) => $for($scope, [$scope.rows]));
function $setup($scope) {
	$selected($scope, undefined);
	$rows($scope, [
		"a",
		"b",
		"c"
	]);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "D l", $setup);
