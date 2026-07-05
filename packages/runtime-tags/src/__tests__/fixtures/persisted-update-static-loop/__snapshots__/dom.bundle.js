// template.marko
const $if_content__count = /* @__PURE__ */ _if_closure(3, 0, ($scope) => _attr_class($scope.a, $scope._.g && $scope.$.params.tag && "hot"));
const $count = /* @__PURE__ */ _let(6, ($scope) => {
	_text($scope.b, $scope.g);
	$if_content__count($scope);
});
const $setup__script = _script_update("a5", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
enableBranches();

// template.marko.update.mjs
const $globals_update = _update_signal("a2");
const $count_seed = _update_signal("a3");
const $for_update = _update_for(2, "a0", (branch, args) => $for_content__update(args[0], branch));
const $if_update = _update_signal("a1");
const $for_content__update = (patch, live) => {
	if ("c" in patch) live["c"] = patch["c"];
	if ("d" in patch) live["d"] = patch["d"];
	if ("Nclass:a" in patch) _attr_class(live["a"], patch["Nclass:a"]);
};
const $if_content__update = (patch, live) => {
	if ("b" in patch) _text(live["b"], patch["b"]);
	$globals_update(live);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("g" in patch) _update_seed(live, $count_seed, patch["g"]);
	if ("e" in patch) live["e"] = patch["e"];
	if ("f" in patch) live["f"] = patch["f"];
	if ("Ac" in patch) $for_update(live, [patch["Ac"], "M"]);
	if ("Dd" in patch) {
		$if_update(live, patch["Dd"]);
		const $patchBranch = patch["Ad"], $liveBranch = live["Ad"], $branchMerge = $if_content__update;
		if ($patchBranch && $liveBranch && $branchMerge) $branchMerge($patchBranch, $liveBranch);
	}
};
var template_marko_update_default = _resume("a4", $update);
