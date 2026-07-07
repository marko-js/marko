// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a4", "loading reviews…", "b");
const $count = /*@__PURE__*/ _let(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a6", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
enableBranches();

// template.marko.update.mjs
const $for_update = _update_for(0, "a0", (branch, args) => _update_scope(args[0], branch));
const $count_seed = _update_signal("a2");
const $if_update = _update_signal("a1");
const $await_content__update = (patch, live) => {
	if ("Aa" in patch) $for_update(live, [patch["Aa"], "M"]);
};
const $try_content__update = (patch, live) => {
	if ("Aa" in patch) _update_branch(patch, live, "a", $await_content__update);
};
const $if_content__update = (patch, live) => {
	_update_scope(patch, live);
	if ("Ab" in patch) _update_branch(patch, live, "b", $try_content__update);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("g" in patch) _update_seed(live, $count_seed, patch["g"]);
	if ("f" in patch) live["f"] = patch["f"];
	if ("Dc" in patch) {
		$if_update(live, patch["Dc"]);
		const $patchBranch = patch["Ac"], $liveBranch = live["Ac"], $branchMerge = [$if_content__update, 0][patch["Dc"]];
		if ($patchBranch && $liveBranch && $branchMerge) $branchMerge($patchBranch, $liveBranch);
	}
};
var template_marko_update_default = _resume("a3", $update);

// data.js
function getReviews(id) {
	if (typeof window !== "undefined") throw new Error("getReviews is server-only");
	return resolveAfter([{
		id: 1,
		text: `Product ${id} works great`,
		stars: 5
	}, {
		id: 2,
		text: `Product ${id} is okay`,
		stars: 3
	}], 1);
}
