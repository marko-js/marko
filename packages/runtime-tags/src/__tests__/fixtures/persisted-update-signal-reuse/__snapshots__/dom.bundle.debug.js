// template.marko.update.mjs
const $input_label_update = _update_signal("__tests__/template.marko_0_input_label/var");
const $update = (patch, live) => {
	if ("$params" in patch) live["$params"] = patch["$params"];
	if ("input" in patch) live["input"] = patch["input"];
	if ("input_label" in patch) $input_label_update(live, patch["input_label"]);
	if ("input_count" in patch) live["input_count"] = patch["input_count"];
	if ("#text/3" in patch) _text(live["#text/3"], patch["#text/3"]);
};
var template_marko_update_default = _resume("__tests__/template.marko_0_update", $update);

// template.marko
const $template = "<button>toggle</button><div> </div><span><!> items</span>";
const $walks = " b D lD%l";
const $input_label__OR__highlight = /* @__PURE__ */ _or(9, ($scope) => _attr_class($scope["#div/1"], $scope.highlight && $scope.input_label));
const $highlight = /* @__PURE__ */ _let("highlight/8", $input_label__OR__highlight);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$highlight($scope, !$scope.highlight);
}));
function $setup($scope) {
	$highlight($scope, false);
	$setup__script($scope);
}
const $input_label = _var_resume("__tests__/template.marko_0_input_label/var", /* @__PURE__ */ _const("input_label", ($scope) => {
	_text($scope["#text/2"], $scope.input_label);
	$input_label__OR__highlight($scope);
}));
const $input_count = ($scope, input_count) => _text($scope["#text/3"], input_count);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_count($scope, input.count);
};
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);
