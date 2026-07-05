// template.marko
const $count = /* @__PURE__ */ _let(8, ($scope) => _text($scope.b, $scope.i));
const $setup__script = _script_update("a3", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.i + 1);
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
	if ("i" in patch) _update_seed(live, $count_seed, patch["i"]);
	if ("d" in patch) live["d"] = patch["d"];
	if ("e" in patch) live["e"] = patch["e"];
	if ("f" in patch) live["f"] = patch["f"];
	if ("g" in patch) live["g"] = patch["g"];
	if ("h" in patch) live["h"] = patch["h"];
	if ("Ac" in patch) $for_update(live, [patch["Ac"], "M"]);
};
var template_marko_update_default = _resume("a2", $update);
