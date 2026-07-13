// template.marko
const $count = /*@__PURE__*/ _let_persisted(5, ($scope) => {
	_text($scope.d, $scope.f);
	_attr_class($scope.e, $scope.f && $scope.$.params.tag && "hot");
});
const $setup__script = _script_update("a0", ($scope) => _on($scope.c, "click", function() {
	$count($scope, $scope.f + 1);
}));
enableBranchesPersisted();

// template.marko.update.mjs
const $count_seed = _update_signal("a2");
const $if_update = _update_signal("a1");
const $globals_update = _update_signal("a3");
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("f" in patch) _update_seed(live, $count_seed, patch["f"]);
	_update_scope(patch, live);
	if ("De" in patch) {
		$if_update(live, patch["De"]);
		const $patchBranch = patch["Ae"], $liveBranch = live["Ae"], $branchMerge = _update_scope;
		if ($patchBranch && $liveBranch && $branchMerge) $branchMerge($patchBranch, $liveBranch);
	}
	$globals_update(live);
};
const _merge = _resume("a4", $update);
function createPatch() {
	return createPatch$1(_merge);
}
