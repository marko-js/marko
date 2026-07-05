// template.marko
const $count = /* @__PURE__ */ _let(8, ($scope) => _text($scope.e, $scope.i));
const $setup__script = _script_update("a2", ($scope) => _on($scope.d, "click", function() {
	$count($scope, $scope.i + 1);
}));
enableBranches();

// template.marko.update.mjs
const $count_seed = _update_signal("a0");
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("i" in patch) _update_seed(live, $count_seed, patch["i"]);
	_update_scope(patch, live);
};
var template_marko_update_default = _resume("a1", $update);
