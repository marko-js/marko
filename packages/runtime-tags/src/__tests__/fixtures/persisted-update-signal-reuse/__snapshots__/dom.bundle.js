// template.marko
const $input_label__OR__highlight = /*@__PURE__*/ _or(9, ($scope) => _attr_class($scope.b, $scope.i && $scope.g));
const $highlight = /*@__PURE__*/ _let(8, $input_label__OR__highlight);
const $setup__script = _script_update("a3", ($scope) => _on($scope.a, "click", function() {
	$highlight($scope, !$scope.i);
}));
enableBranches();

// template.marko.update.mjs
const $highlight_seed = _update_signal("a0");
const $input_label_update = _update_signal("a1");
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("i" in patch) _update_seed(live, $highlight_seed, patch["i"]);
	if ("g" in patch) $input_label_update(live, patch["g"]);
	_update_scope(patch, live);
};
var template_marko_update_default = _resume("a2", $update);
