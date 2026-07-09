// template.marko
const $if_content__count = /*@__PURE__*/ _if_closure(3, 0, ($scope) => _attr_class($scope.a, $scope._.g && $scope.$.params.tag && "hot"));
const $count = /*@__PURE__*/ _let(6, ($scope) => {
	_text($scope.b, $scope.g);
	$if_content__count($scope);
});
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
enableBranches();

// template.marko.update.mjs
const $globals_update = _update_signal("a3");
const $count_seed = _update_signal("a4");
const $for_update = _update_for(2, "a1", (branch, args) => _update_scope(args[0], branch));
const $if_update = _update_signal("a2");
const $if_content__update = (patch, live) => {
	_update_scope(patch, live);
	$globals_update(live);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("g" in patch) _update_seed(live, $count_seed, patch["g"]);
	if ("Ac" in patch) $for_update(live, [patch["Ac"], "M"]);
	if ("Dd" in patch) {
		$if_update(live, patch["Dd"]);
		const $patchBranch = patch["Ad"], $liveBranch = live["Ad"], $branchMerge = $if_content__update;
		if ($patchBranch && $liveBranch && $branchMerge) $branchMerge($patchBranch, $liveBranch);
	}
};
var template_marko_update_default = _resume("a5", $update);
