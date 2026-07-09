// template.marko
const $if_content__pair = /*@__PURE__*/ _let(4, ($scope) => _text($scope.a, $scope.e));
const $if_content__setup__script = _script_update("a0", ($scope) => _on($scope.b, "click", function() {
	$if_content__pair($scope, $scope.e + "!");
}));
const $count = /*@__PURE__*/ _let(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
enableBranches();

// template.marko.update.mjs
const $pair_seed = _update_signal("a3");
const $count_seed = _update_signal("a4");
const $if_update = _update_signal("a2");
const $if_content__update = (patch, live) => {
	_update_pair(patch, live);
	if ("e" in patch) _update_seed(live, $pair_seed, patch["e"]);
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
var template_marko_update_default = _resume("a5", $update);
