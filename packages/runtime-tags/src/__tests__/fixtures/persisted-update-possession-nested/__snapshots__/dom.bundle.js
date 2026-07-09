// tags/shell.marko
enableBranches();

// template.marko
const $count = /*@__PURE__*/ _let(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a4", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
enableBranches();

// tags/shell.marko.update.mjs
const $update$1 = (patch, live) => {
	if ("Da" in patch) _update_dynamic(patch, live, "Da", "Aa", 0);
};
var shell_marko_update_default = _resume("b1", $update$1);

// template.marko.update.mjs
const $count_seed = _update_signal("a5");
const $Page_content__update = (patch, live) => {
	if ("Da" in patch) _update_dynamic(patch, live, "Da", "Aa", 0);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("d" in patch) _update_seed(live, $count_seed, patch["d"]);
	if ("c" in patch) shell_marko_update_default(patch["c"], live["c"]);
};
_update_content("a1", _update_scope);
_update_content("a3", $Page_content__update);
_update_content("a0", _update_scope);
var template_marko_update_default = _resume("a6", $update);
