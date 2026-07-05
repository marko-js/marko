// template.marko
const $if_content__pair = /* @__PURE__ */ _let(4, ($scope) => _text($scope.a, $scope.e));
const $if_content__setup__script = _script_update("a4", ($scope) => _on($scope.b, "click", function() {
	$if_content__pair($scope, $scope.e + "!");
}));
const $count = /* @__PURE__ */ _let(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a5", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
enableBranches();

// template.marko.update.mjs
const $pair_seed = _update_signal("a1");
const $count_seed = _update_signal("a2");
const $if_update = _update_signal("a0");
const $if_content__update = (patch, live) => {
	_update_pair(patch, live);
	if ("e" in patch) _update_seed(live, $pair_seed, patch["e"]);
	if ("c" in patch) _text(live["c"], patch["c"]);
	if ("d" in patch) _text(live["d"], patch["d"]);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("g" in patch) _update_seed(live, $count_seed, patch["g"]);
	if ("d" in patch) live["d"] = patch["d"];
	if ("e" in patch) live["e"] = patch["e"];
	if ("f" in patch) live["f"] = patch["f"];
	if ("Dc" in patch) {
		$if_update(live, patch["Dc"]);
		const $patchBranch = patch["Ac"], $liveBranch = live["Ac"], $branchMerge = [$if_content__update, 0][patch["Dc"]];
		if ($patchBranch && $liveBranch && $branchMerge) $branchMerge($patchBranch, $liveBranch);
	}
};
var template_marko_update_default = _resume("a3", $update);
