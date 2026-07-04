// template.marko
const $else_content__input_title = /* @__PURE__ */ _if_closure(0, 1, ($scope) => _text($scope.a, $scope._.e));
const $else_content__setup__script = _script_update("a2", ($scope) => _on($scope.b, "click", function() {
	$count($scope._, $scope._.f + 1);
}));
const $else_content__setup = ($scope) => {
	if (!_updating()) $else_content__input_title._($scope);
	$else_content__count._($scope);
	$else_content__setup__script($scope);
};
const $else_content__count = /* @__PURE__ */ _if_closure(0, 1, ($scope) => _text($scope.c, $scope._.f));
const $count = /* @__PURE__ */ _let(5, $else_content__count);
const $if = _var_resume("a0", /* @__PURE__ */ _if(0, "<h2>Something went wrong</h2>", "b", 0, "<h1> </h1><button> </button>", "D l D l", $else_content__setup));

// template.marko.update.mjs
const $if_update = _update_signal("a0");
const $else_content__update = (patch, live) => {
	_update_pair(patch, live);
	if ("a" in patch) _text(live["a"], patch["a"]);
};
const $update = (patch, live) => {
	if ("b" in patch) live["b"] = patch["b"];
	if ("c" in patch) live["c"] = patch["c"];
	if ("d" in patch) live["d"] = patch["d"];
	if ("e" in patch) live["e"] = patch["e"];
	if ("Da" in patch) {
		$if_update(live, patch["Da"]);
		const $patchBranch = patch["Aa"], $liveBranch = _update_flush_fresh(live["Aa"]), $branchMerge = [0, $else_content__update][patch["Da"]];
		if ($patchBranch && $liveBranch && $branchMerge) $branchMerge($patchBranch, $liveBranch);
	}
};
var template_marko_update_default = _resume("a1", $update);
