// template.marko
const $count = /*@__PURE__*/ _let_persisted(11, ($scope) => _text($scope.b, $scope.l));
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.l + 1);
}));
enableBranchesPersisted();

// template.marko.update.mjs
const $if_update = _update_signal("a5");
const $for_update = _update_for(0, "a3", (branch, args) => _update_scope(args[0], branch));
const $for_update2 = _update_for(1, "a4", (branch, args) => $for_content__update(args[0], branch));
const $count_seed = _update_signal("a2");
const $if_update2 = _update_signal("a1");
const $for_content__update = (patch, live) => {
	if ("Da" in patch) {
		$if_update(live, patch["Da"]);
		const $patchBranch = patch["Aa"], $liveBranch = live["Aa"], $branchMerge = [0, _update_scope][patch["Da"]];
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
	if ("f" in patch) live["f"] = patch["f"];
	if ("g" in patch) live["g"] = patch["g"];
	if ("j" in patch) live["j"] = patch["j"];
	if ("k" in patch) live["k"] = patch["k"];
	if ("Dc" in patch) {
		$if_update2(live, patch["Dc"]);
		const $patchBranch2 = patch["Ac"], $liveBranch2 = live["Ac"], $branchMerge2 = [$if_content__update, 0][patch["Dc"]];
		if ($patchBranch2 && $liveBranch2 && $branchMerge2) $branchMerge2($patchBranch2, $liveBranch2);
	}
};
var template_marko_update_default = _resume("a6", $update);
