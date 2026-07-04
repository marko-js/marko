// template.marko
const $else_content__setup__script = _script_update("a3", ($scope) => _on($scope.b, "click", function() {
	$count($scope._, $scope._.f + 1);
}));
const $else_content__count = /* @__PURE__ */ _if_closure(0, 1, ($scope) => _text($scope.c, $scope._.f));
const $count = /* @__PURE__ */ _let(5, $else_content__count);
enableBranches();

// template.marko.update.mjs
const $count_seed = _update_signal("a1");
const $if_update = _update_signal("a0");
const $else_content__update = (patch, live) => {
	_update_pair(patch, live);
	if ("a" in patch) _text(live["a"], patch["a"]);
};
const $update = (patch, live) => {
	if ("f" in patch) _update_seed(live, $count_seed, patch["f"]);
	if ("b" in patch) live["b"] = patch["b"];
	if ("c" in patch) live["c"] = patch["c"];
	if ("d" in patch) live["d"] = patch["d"];
	if ("e" in patch) live["e"] = patch["e"];
	if ("Da" in patch) {
		$if_update(live, patch["Da"]);
		const $patchBranch = patch["Aa"], $liveBranch = live["Aa"], $branchMerge = [0, $else_content__update][patch["Da"]];
		if ($patchBranch && $liveBranch && $branchMerge) $branchMerge($patchBranch, $liveBranch);
	}
};
var template_marko_update_default = _resume("a2", $update);
