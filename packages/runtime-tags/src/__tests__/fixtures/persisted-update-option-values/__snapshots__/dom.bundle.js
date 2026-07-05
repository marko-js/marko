// template.marko
const $count = /* @__PURE__ */ _let(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a3", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
enableBranches();

// template.marko.update.mjs
const $count_seed = _update_signal("a1");
const $for_update = _update_for(2, "a0", (branch, args) => $for_content__update(args[0], branch));
const $for_content__update = (patch, live) => {
	if ("c" in patch) live["c"] = patch["c"];
	if ("d" in patch) live["d"] = patch["d"];
	if ("e" in patch) live["e"] = patch["e"];
	if ("f" in patch) live["f"] = patch["f"];
	if ("Nvalue:a" in patch) _attr(live["a"], "value", patch["Nvalue:a"]);
	if ("b" in patch) _text(live["b"], patch["b"]);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("g" in patch) _update_seed(live, $count_seed, patch["g"]);
	if ("d" in patch) live["d"] = patch["d"];
	if ("e" in patch) live["e"] = patch["e"];
	if ("f" in patch) live["f"] = patch["f"];
	if ("Ac" in patch) $for_update(live, [patch["Ac"], "M"]);
};
var template_marko_update_default = _resume("a2", $update);
