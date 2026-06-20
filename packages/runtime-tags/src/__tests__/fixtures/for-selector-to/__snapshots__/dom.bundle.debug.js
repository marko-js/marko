// template.marko
const $template = "<table><tbody></tbody></table>";
const $walks = "D l";
const $for_content__selected = /* @__PURE__ */ _for_selector("#tbody/0", "selected", ($scope) => _attr_class($scope["#tr/0"], $scope._.selected === $scope["#LoopKey"] && "danger"));
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$selected($scope._, $scope["#LoopKey"]);
}));
const $for_content__setup = ($scope) => {
	$for_content__selected._($scope);
	_text($scope["#text/2"], $scope["#LoopKey"]);
	$for_content__setup__script($scope);
};
const $selected = /* @__PURE__ */ _let("selected/1", $for_content__selected);
const $for = /* @__PURE__ */ _for_to("#tbody/0", "<tr><td><button class=select> </button></td></tr>", " E D n", $for_content__setup);
function $setup($scope) {
	$selected($scope, undefined);
	$for($scope, [
		4,
		0,
		1
	]);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "D l", $setup);
