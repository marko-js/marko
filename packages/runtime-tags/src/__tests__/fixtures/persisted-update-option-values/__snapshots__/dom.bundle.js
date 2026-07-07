// template.marko
const $count = /*@__PURE__*/ _let(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a3", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
enableBranches();

// template.marko.update.mjs
const $count_seed = _update_signal("a1");
const $for_update = _update_for(2, "a0", (branch, args) => _update_scope(args[0], branch));
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("g" in patch) _update_seed(live, $count_seed, patch["g"]);
	if ("Ac" in patch) $for_update(live, [patch["Ac"], "M"]);
};
var template_marko_update_default = _resume("a2", $update);
