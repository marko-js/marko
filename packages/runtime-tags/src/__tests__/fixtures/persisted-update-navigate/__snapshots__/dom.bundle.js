// tags/price.marko
enableBranches();

// template.marko
const $input_product_featured__OR__expanded = /*@__PURE__*/ _or(16, ($scope) => _attr_class($scope.e, $scope.p && $scope.l && "spotlight"));
const $expanded = /*@__PURE__*/ _let(15, ($scope) => {
	_text($scope.d, $scope.p ? "Hide" : "Show");
	$input_product_featured__OR__expanded($scope);
});
const $setup__script = _script_update("a0", ($scope) => _on($scope.c, "click", function() {
	$expanded($scope, !$scope.p);
}));
enableBranches();

// template.marko.update.mjs
const $expanded_seed = _update_signal("a3");
const $input_product_featured_update = _update_signal("a4");
const $if_update = _update_signal("a1");
const $for_update = _update_for(5, "a2", (branch, args) => _update_scope(args[0], branch));
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("p" in patch) _update_seed(live, $expanded_seed, patch["p"]);
	if ("l" in patch) $input_product_featured_update(live, patch["l"]);
	if ("n" in patch) live["n"] = patch["n"];
	_update_scope(patch, live);
	if ("De" in patch) {
		$if_update(live, patch["De"]);
		const $patchBranch = patch["Ae"], $liveBranch = live["Ae"], $branchMerge = _update_scope;
		if ($patchBranch && $liveBranch && $branchMerge) $branchMerge($patchBranch, $liveBranch);
	}
	if ("Af" in patch) $for_update(live, [patch["Af"], "M"]);
};
var template_marko_update_default = _resume("a5", $update);
