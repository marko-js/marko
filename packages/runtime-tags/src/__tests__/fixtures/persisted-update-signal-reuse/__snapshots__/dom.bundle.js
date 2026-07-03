// template.marko
const $input_label__OR__highlight = /* @__PURE__ */ _or(9, ($scope) => _attr_class($scope.b, $scope.i && $scope.g));
const $highlight = /* @__PURE__ */ _let(8, $input_label__OR__highlight);
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$highlight($scope, !$scope.i);
}));
const $input_label = _var_resume("a0", /* @__PURE__ */ _const(6, ($scope) => {
	_text($scope.c, $scope.g);
	$input_label__OR__highlight($scope);
}));

// template.marko.update.mjs
const $input_label_update = _update_signal("a0");
const $update = (patch, live) => {
	if ("e" in patch) live["e"] = patch["e"];
	if ("f" in patch) live["f"] = patch["f"];
	if ("g" in patch) $input_label_update(live, patch["g"]);
	if ("h" in patch) live["h"] = patch["h"];
	if ("d" in patch) _text(live["d"], patch["d"]);
};
var template_marko_update_default = _resume("a1", $update);
