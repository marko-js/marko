// template.marko
const $count = /* @__PURE__ */ _let(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a6", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
enableBranches();

// template.marko.update.mjs
const $for_update = _update_for(0, "a2", (branch, args) => _update_scope(args[0], branch));
const $for_update2 = _update_for(1, "a0", (branch, args) => _update_scope(args[0], branch));
const $count_seed = _update_signal("a4");
const $for_update3 = _update_for(2, "a1", (branch, args) => $for_content__update(args[0], branch));
const $if_update = _update_signal("a3");
const $if_content__update = (patch, live) => {
	if ("Aa" in patch) $for_update(live, [patch["Aa"], "M"]);
};
const $for_content__update = (patch, live) => {
	_update_scope(patch, live);
	if ("Ab" in patch) $for_update2(live, [patch["Ab"], "M"]);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("g" in patch) _update_seed(live, $count_seed, patch["g"]);
	if ("e" in patch) live["e"] = patch["e"];
	if ("Ac" in patch) $for_update3(live, [patch["Ac"], "M"]);
	if ("Dd" in patch) {
		$if_update(live, patch["Dd"]);
		const $patchBranch = patch["Ad"], $liveBranch = live["Ad"], $branchMerge = $if_content__update;
		if ($patchBranch && $liveBranch && $branchMerge) $branchMerge($patchBranch, $liveBranch);
	}
};
var template_marko_update_default = _resume("a5", $update);

// data.ts
const REGIONS = [
	"na",
	"eu",
	"apac"
];
