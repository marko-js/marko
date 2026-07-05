// template.marko
const $count = /* @__PURE__ */ _let(4, ($scope) => _text($scope.b, $scope.e));
const $setup__script = _script_update("a2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
enableBranches();

// template.marko.update.mjs
const $count_seed = _update_signal("a0");
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("e" in patch) _update_seed(live, $count_seed, patch["e"]);
	_update_scope(patch, live);
};
var template_marko_update_default = _resume("a1", $update);
