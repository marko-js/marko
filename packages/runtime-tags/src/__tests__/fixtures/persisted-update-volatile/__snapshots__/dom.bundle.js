// template.marko
const $count = _var_resume("a0", /* @__PURE__ */ _let(8, ($scope) => _text($scope.e, $scope.i)));
const $setup__script = _script_update("a2", ($scope) => _on($scope.d, "click", function() {
	$count($scope, $scope.i + 1);
}));

// template.marko.update.mjs
const $count_seed = _update_signal("a0");
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("i" in patch) _update_seed(live, $count_seed, patch["i"]);
	if ("f" in patch) live["f"] = patch["f"];
	if ("g" in patch) live["g"] = patch["g"];
	if ("h" in patch) live["h"] = patch["h"];
	if ("j" in patch) live["j"] = patch["j"];
	if ("a" in patch) _text(live["a"], patch["a"]);
	if ("b" in patch) _text(live["b"], patch["b"]);
	if ("c" in patch) _text(live["c"], patch["c"]);
};
var template_marko_update_default = _resume("a1", $update);
