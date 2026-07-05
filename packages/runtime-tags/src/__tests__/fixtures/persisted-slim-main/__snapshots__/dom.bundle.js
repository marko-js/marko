// template.marko
const $count = /* @__PURE__ */ _let(11, ($scope) => _text($scope.b, $scope.l));
const $setup__script = _script_update("a6", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.l + 1);
}));
enableBranches();

// template.marko.update.mjs
const $if_update = _update_signal("a1");
const $for_update = _update_for(0, "a0", (branch, args) => $for_content2__update(args[0], branch));
const $for_update2 = _update_for(1, "a2", (branch, args) => $for_content__update(args[0], branch));
const $count_seed = _update_signal("a4");
const $if_update2 = _update_signal("a3");
const $for_content2__update = (patch, live) => {
	if ("b" in patch) live["b"] = patch["b"];
	if ("c" in patch) live["c"] = patch["c"];
	if ("d" in patch) live["d"] = patch["d"];
	if ("a" in patch) _text(live["a"], patch["a"]);
};
const $else_content__update = (patch, live) => {
	if ("Nhref:a" in patch) _attr(live["a"], "href", patch["Nhref:a"]);
};
const $for_content__update = (patch, live) => {
	if ("Da" in patch) {
		$if_update(live, patch["Da"]);
		const $patchBranch = patch["Aa"], $liveBranch = live["Aa"], $branchMerge = [0, $else_content__update][patch["Da"]];
		if ($patchBranch && $liveBranch && $branchMerge) $branchMerge($patchBranch, $liveBranch);
	}
};
const $if_content__update = (patch, live) => {
	if ("Aa" in patch) $for_update(live, [patch["Aa"], "M"]);
	if ("Ab" in patch) $for_update2(live, [patch["Ab"], "M"]);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("l" in patch) _update_seed(live, $count_seed, patch["l"]);
	if ("d" in patch) live["d"] = patch["d"];
	if ("e" in patch) live["e"] = patch["e"];
	if ("f" in patch) live["f"] = patch["f"];
	if ("g" in patch) live["g"] = patch["g"];
	if ("h" in patch) live["h"] = patch["h"];
	if ("i" in patch) live["i"] = patch["i"];
	if ("j" in patch) live["j"] = patch["j"];
	if ("k" in patch) live["k"] = patch["k"];
	if ("Dc" in patch) {
		$if_update2(live, patch["Dc"]);
		const $patchBranch2 = patch["Ac"], $liveBranch2 = live["Ac"], $branchMerge2 = [$if_content__update, 0][patch["Dc"]];
		if ($patchBranch2 && $liveBranch2 && $branchMerge2) $branchMerge2($patchBranch2, $liveBranch2);
	}
};
var template_marko_update_default = _resume("a5", $update);
