// template.marko
const $if_content__setup__script = _script_update("a4", ($scope) => _on($scope.b, "click", function() {
	$count($scope._, $scope._.f + 10);
}));
const $count = /*@__PURE__*/ _let(5, ($scope) => {
	_text($scope.d, $scope.f);
	_attr_class($scope.e, $scope.f && $scope.$.params.tag && "hot");
});
const $setup__script = _script_update("a0", ($scope) => _on($scope.c, "click", function() {
	$count($scope, $scope.f + 1);
}));
enableBranches();

// template.marko.update.mjs
const $count_seed = _update_signal("a2");
const $if_update = _update_signal("a1");
const $globals_update = _update_signal("a3");
const $if_content__update = (patch, live) => {
	_update_pair(patch, live);
	_update_scope(patch, live);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("f" in patch) _update_seed(live, $count_seed, patch["f"]);
	_update_scope(patch, live);
	if ("De" in patch) {
		$if_update(live, patch["De"]);
		const $patchBranch = patch["Ae"], $liveBranch = live["Ae"], $branchMerge = $if_content__update;
		if ($patchBranch && $liveBranch && $branchMerge) $branchMerge($patchBranch, $liveBranch);
	}
	$globals_update(live);
};
var template_marko_update_default = _resume("a5", $update);
