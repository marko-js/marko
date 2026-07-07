// template.marko
const $if_content__details_price__script = _script_update("a3", ($scope) => _on($scope.c, "click", function() {
	$count($scope._, $scope.f);
}));
const $count = /*@__PURE__*/ _let(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a4", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
enableBranches();

// template.marko.update.mjs
const $count_seed = _update_signal("a1");
const $if_update = _update_signal("a0");
const $if_content__update = (patch, live) => {
	_update_pair(patch, live);
	if ("f" in patch) live["f"] = patch["f"];
	_update_scope(patch, live);
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
var template_marko_update_default = _resume("a2", $update);

// data.js
function getDetails(id) {
	if (typeof window !== "undefined") throw new Error("getDetails is server-only");
	return {
		name: `Part ${id}`,
		price: id * 10
	};
}
