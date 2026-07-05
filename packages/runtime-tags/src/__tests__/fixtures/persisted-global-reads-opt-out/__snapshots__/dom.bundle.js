// template.marko
const $count = /* @__PURE__ */ _let(5, ($scope) => {
	_text($scope.d, $scope.f);
	_attr_class($scope.e, $scope.f && $scope.$.params.tag && "hot");
});
const $setup__script = _script_update("a4", ($scope) => _on($scope.c, "click", function() {
	$count($scope, $scope.f + 1);
}));
enableBranches();

// template.marko.update.mjs
const $count_seed = _update_signal("a1");
const $if_update = _update_signal("a0");
const $globals_update = _update_signal("a2");
const $if_content__update = (patch, live) => {
	if ("a" in patch) _text(live["a"], patch["a"]);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("f" in patch) _update_seed(live, $count_seed, patch["f"]);
	if ("a" in patch) _text(live["a"], patch["a"]);
	if ("Nhref:b" in patch) _attr(live["b"], "href", patch["Nhref:b"]);
	if ("De" in patch) {
		$if_update(live, patch["De"]);
		const $patchBranch = patch["Ae"], $liveBranch = live["Ae"], $branchMerge = $if_content__update;
		if ($patchBranch && $liveBranch && $branchMerge) $branchMerge($patchBranch, $liveBranch);
	}
	$globals_update(live);
};
var template_marko_update_default = _resume("a3", $update);
