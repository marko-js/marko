// tags/chip-list.marko
enableBranches();

// template.marko
const $count = /* @__PURE__ */ _let(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
enableBranches();

// tags/chip-list.marko.update.mjs
const $for_update = _update_for(0, "b0", (branch, args) => _update_scope(args[0], branch));
const $update$1 = (patch, live) => {
	if ("Aa" in patch) $for_update(live, [patch["Aa"], "M"]);
};
var chip_list_marko_update_default = _resume("b1", $update$1);

// template.marko.update.mjs
const $count_seed = _update_signal("a0");
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("d" in patch) _update_seed(live, $count_seed, patch["d"]);
	if ("c" in patch) chip_list_marko_update_default(patch["c"], live["c"]);
};
var template_marko_update_default = _resume("a1", $update);
