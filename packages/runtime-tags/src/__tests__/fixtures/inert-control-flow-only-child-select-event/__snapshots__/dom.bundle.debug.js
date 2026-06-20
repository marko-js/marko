// template.marko
const $template = "<select></select>";
const $walks = " b";
const $for_content__selected = /* @__PURE__ */ _for_selector("#select/0", "selected", ($scope) => _attr($scope["#option/0"], "selected", $scope._.selected === $scope["#LoopKey"]));
const $for_content__setup = ($scope) => {
	$for_content__selected._($scope);
	_text($scope["#text/1"], $scope["#LoopKey"]);
};
const $selected = /* @__PURE__ */ _let("selected/1", $for_content__selected);
const $for = /* @__PURE__ */ _for_until("#select/0", "<option> </option>", " D l", $for_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#select/0"], "change", function(e) {
	$selected($scope, e.target.value);
}));
function $setup($scope) {
	$selected($scope, 0);
	$for($scope, [
		3,
		0,
		1
	]);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, " b", $setup);
